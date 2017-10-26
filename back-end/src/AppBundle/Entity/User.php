<?php
namespace AppBundle\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * User
 *
 * @ORM\Table(name="User", indexes={@ORM\Index(name="email_id", columns={"email_id"}), @ORM\Index(name="email_id_2", columns={"email_id"}), @ORM\Index(name="email_id_3", columns={"email_id"}), @ORM\Index(name="contact_id", columns={"contact_id", "graduation_id", "interest_id"}), @ORM\Index(name="graduation_id", columns={"graduation_id"}), @ORM\Index(name="interest_id", columns={"interest_id"})})
 * @ORM\Entity
 */
class User
{
    /**
     * @var integer
     *
     * @ORM\Column(name="user_id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $userId;
    /**
     * @var string
     *
     * @ORM\Column(name="first_name", type="string", length=255, nullable=false)
     */
    private $firstName;
    /**
     * @var string
     *
     * @ORM\Column(name="last_name", type="string", length=255, nullable=false)
     */
    private $lastName;
    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_of_birth", type="date", nullable=false)
     */
    private $dateOfBirth;
    /**
     * @var string
     *
     * @ORM\Column(name="blood_group", type="string", length=6, nullable=false)
     */
    private $bloodGroup;
    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", length=6, nullable=false)
     */
    private $gender;
    /**
     * @var integer
     *
     * @ORM\Column(name="email_id", type="integer", nullable=false)
     */
    private $emailId;
    /**
     * @var integer
     *
     * @ORM\Column(name="contact_id", type="integer", nullable=false)
     */
    private $contactId;
    /**
     * @var integer
     *
     * @ORM\Column(name="graduation_id", type="integer", nullable=false)
     */
    private $graduationId;
    /**
     * @var integer
     *
     * @ORM\Column(name="interest_id", type="integer", nullable=false)
     */
    private $interestId;
    public function getfirstName()
    {
        return $this->firstName;
    }
    public function getlastName()
    {
        return $this->lastName;
    }
    public function setfirstName($firstName) 
    {
        $this->firstName = $firstName;
    }
    public function setlastName($lastName)
    {
        
        $this->lastName = $lastName;
    }
    public function getEmail()
    {
        return $this->emailId;
    }
    public function setEmail($emailId) 
    {
        $this->emailId = $emailId;
    }
    public function getInterest()
    {
        return $this->interestId;
    }
    public function setInterest($interestId) 
    {
        $this->interestId = $interestId;
    }
    public function getContactNumber()
    {
        return $this->contactId;
    }
    public function setContactNumber($contactId) 
    {
        $this->contactId = $contactId;
    }
    public function getdateofbirth()
    {
        return $this->date_of_birth;
    }
    public function setdateofbirth(\DateTime $dateOfBirth = null)
    {
        $this->dateOfBirth = $dateOfBirth;
    }
    public function getBloodGroup()
    {
        return $this->bloodGroup;
    }
    public function setBloodGroup($bloodGroup)
    {
        $this->bloodGroup = $bloodGroup;
    }
    public function getGender()
    {
        return $this->gender;
    }
    public function setGender($gender)
    {
        $this->gender = $gender;
    }
    public function getGraduation()
    {
        return $this->graduationId;
    }
    public function setGraduation($graduationId)
    {
        $this->graduationId = $graduationId;
    }
    public function getUserId()
    {
        return $this->userId;
    }
    public function setUserId($userId)
    {
         $this->userId = $userId   ;
    }
}
