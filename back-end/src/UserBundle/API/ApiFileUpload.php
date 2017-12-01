<?php

namespace UserBundle\API;

use Symfony\Component\HttpFoundation\File\File;

class ApiFileUpload extends File
{
    public function __construct($content)
    {
        $filePath = tempnam(sys_get_temp_dir(), 'UploadedFile');
        $file = fopen($filePath, "w");
        fwrite($file, base64_decode($content ));
        $data = stream_get_meta_data($file);
        $path = $data['uri'];
        fclose($file);
        parent::__construct($path, true);
    }
}