<?php

namespace UserBundle\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use FOS\RestBundle\Controller\Annotations as Rest;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use UserBundle\Entity\UserDetail;
use UserBundle\Entity\UserEmail;
use UserBundle\Entity\UserContact;
use UserBundle\Entity\UserGraduation;
use UserBundle\Entity\InterestType;
use UserBundle\Entity\AreaOfInterest;
use UserBundle\Entity\GraduationType;
use UserBundle\Form\UserType;
use UserBundle\Form\UserInterestType;
use UserBundle\Form\UserGraduationType;
use UserBundle\API\ApiFileUpload;
// use Doctrine\ORM\Tools\Pagination\Paginator;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
/*use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;*/
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\HttpFoundation\File\File;

/**
* class UserController to control Action 
*
*/

class UserController extends FOSRestController
{
    private $limit;
    private $offset;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->limit = 0;
        $this->offset = 0;
    }
    
    /**
     * Function to add new user 
     * 
     * @param object $request
     *
     * @return {array} 
     */

    public function newAction(Request $request)
    {   
        $getData = $request->request->all();
      
        if ($request->request->has('image')) {
            $files = new ApiFileUpload($request->request->get('image'));
            $getData['image']=  $files;
        }
        // dump($getData);
        // die();
        // $user = $this->get('security.token_storage')->getToken()->getUser();
        // if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
        //     throw $this->createAccessDeniedException();
        // }
        // $session = $request->getSession();
        $newUser = new UserDetail();
        $newUser->addEmailId(new UserEmail());
        $newUser->addContactNumber(new UserContact());
        $newUser->addAreaOfInterest(new InterestType());
        $newUser->addGraduationType(new UserGraduation());
       
        $form = $this->createForm(UserType::class, $newUser);      

        $data = json_decode($request->getContent(), true);
   
        $form->submit($data);  
        // $form->handleRequest($request);
        // if ($request->isMethod('POST')) {
        if ($form->isSubmitted() && $form->isValid()) {
            // dump($form->isValid());
            // dump($this->getErrorMessage($form));
            // dump($form->getErrors(true, false));
            // dump((string)$form->getErrors(true));
            
            // $errors = array();
            // $e = $form->getErrors(true, false);
            // dump((string)$e);
            // foreach ( $e as $error) {
            //     // $errors[] = $error->getMessage();
            // }
            $em = $this->getDoctrine()->getManager();
            $file = $getData['image'];
            $fileName = md5(uniqid(mt_rand(), true));
            $fileName = $fileName.".".$file->guessExtension();
            $file->move(
                $this->getParameter('brochures_directory'), 
                $fileName
                );
            $newUser->setImage($fileName);  
            $em->persist($newUser);
            $em->flush();
            
                // return new JsonResponse($response, Response::HTTP_BAD_REQUEST); 
                // return new Response($e->getMessage());
          
            // $response = array(
            //     "code" => 0,
            //     "message" => "Registered Successfully",
            //     "error" => null,
            //     "result" => null
            // );
            return new View("Registered Successfully", Response::HTTP_OK);
            // return new JsonResponse($response, Response::HTTP_OK);
            // return new JsonResponse([
            //     'errors' => [
            //         'firstName' => 'First name is invalid'
            //     ],
            //     'messages' => '',
            //     'status' => 400
            // ]);
        } else {
            // $response = array(
            //     "code" => 1,
            //     "message" => "validation errors",
            //     "error" => $error->getMessage();
            //     );
            $response = $this->getErrorMessage($form);
            return new View($response,Response::HTTP_BAD_REQUEST);
        }


    }

    /**
    * Function to list all user
    * 
    * @param object $request
    *
    * @return {array} 
    */
    public function listAction(Request $request)
    {
        // if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
        //     throw $this->createAccessDeniedException();
        // }
        $entityManager = $this->getDoctrine()->getManager();
        // $repository = $entityManager->getRepository("UserBundle:UserDetail");
        
        // $em = $this->getEntityManager();
        $query = $entityManager->createQuery("select u.firstName, u.lastName, u.image , u.dateOfBirth from UserBundle\Entity\UserDetail u");
        $user = $query->getResult();
        // $this->limit = $this->container->getParameter('limit');
        // $userlist = $repository->findBy(
        //     array(),
        //     array(),
        //     $this->limit,
        //     $this->offset
        //     );
        // $total_page = ceil(count($user)/$this->limit);

        return $user;
        // return $this->render('UserBundle:Default:listuser.html.twig', array('max' => $total_page,
        //     "results"=>$userlist, 
        //     "current" => 1
        //     ));
    }

    /**
    * Function to display users
    * 
    * @param object $request
    *
    * @return {array} 
    */
    public function displayAction(Request $request)
    {

        $page = $request->get('page');
        // $limit = $request->get
        // dump($page);
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $entityManager->getRepository("UserBundle:UserDetail");
        $this->limit = $this->container->getParameter('limit');
        $this->offset = ($page-1)*$this->limit;
        $userlist = $repository->findBy(array(),array(), $this->limit, $this->offset);
        
        return new View($userlist,Response::HTTP_OK);
        // return $this->render('UserBundle:Default:displayType.html.twig', array('results' => $userlist, "current"=> $page));
    }

    /**
    * Function to view user details
    * 
    * @param object $request
    *
    * @return {array} 
    */
    public function viewAction(Request $request)
    {
        // if (!$this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY')) {
        //     throw $this->createAccessDeniedException();
        // }
        $id = $request->get('id');
        $repository = $this->getDoctrine()->getRepository(UserDetail::class);
        $user = $repository->find($id);
        if (!$user) {
            throw $this->createNotFoundException('No Details found for');
        }
        return $this->render('UserBundle:Default:viewuser.html.twig', array('results' => $user));
    }

    /**
    * Function to Manipulate User Details
    * 
    * @param object $request
    *
    * @return {array} 
    */
    public function editAction(Request $request)
    {
        $id = $request->get('id');
        $entityManager = $this->getDoctrine()->getManager();
        $repository = $entityManager->getRepository("UserBundle:UserDetail");
        $user = $repository->find($id);

        if (!$user) {
            throw $this->createNotFoundException("Unable to fetch Details");
        }
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $repository = $entityManager->getRepository("UserBundle:UserDetail");
            $user = new UserDetail();
            $user = $form->getData();
            $file = $user->getImage();
         /*   $file = $user->getImage();
            $fileName = md5(uniqid()).'.'.$file->guessExtension();
            $file->move(
                $this->getParameter('brochures_directory'),
                $fileName
                );*/
            // $user->setImage($fileName);   
           /* $file = $user->getImage();
            dump($file);
            die();    */
            /*$user->setImage(
                new File($this->getParameter("brochures_directory").'/'.$user->getImage())
            );*/

            $fileName = md5(uniqid(mt_rand(), true));
            $fileName = $fileName.".".$file->guessExtension();
            $file->move(
                $this->getParameter('brochures_directory'), 
                $fileName
                );
            $user->setImage($fileName);  
            $entityManager->flush();
            $this->addFlash(
                'success',
                'Changes Applied Successfully!'
                );
            return $this->redirectToRoute('view_user');
        }
        return $this->render("UserBundle:Default:new.html.twig", array(
            'form'=> $form->createView(),
            ));
    }   

    /*
    *
    *
    */
    public function getErrorMessage(\Symfony\Component\Form\Form $form) 
    {
        //   $response =  array();
        foreach ($form->getErrors(true) as $error) {
            $response['message'] = $error->getMessage();
        break;
        }
        return $response;
    }
}
