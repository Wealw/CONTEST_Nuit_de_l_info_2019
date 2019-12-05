<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController {

    public function index(): Response
    {        
        return $this->render('home.html.twig');
    }

    public function register(): Response
    {        
        return $this->render('register.html.twig');
    }
}