<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(
        Request $request,
        UserPasswordHasherInterface $passwordHasher,
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator
    ): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        // Validation basique
        if (!isset($data['email']) || !isset($data['password']) || !isset($data['name']) || !isset($data['userType'])) {
            return $this->json(['error' => 'Missing required fields'], 400);
        }

        // Vérifier si l'email existe déjà
        $existingUser = $entityManager->getRepository(User::class)->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['error' => 'Email already exists'], 400);
        }

        // Créer l'utilisateur
        $user = new User();
        $user->setEmail($data['email']);
        $user->setName($data['name']);
        $user->setUserType($data['userType']); // 'demandeur' ou 'helper'
        
        // Hasher le mot de passe
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);

        // Champs optionnels
        if (isset($data['phone'])) {
            $user->setPhone($data['phone']);
        }
        if (isset($data['city'])) {
            $user->setCity($data['city']);
        }
        if (isset($data['languages'])) {
            $user->setLanguages($data['languages']);
        }
        if (isset($data['arrivedInFrance'])) {
            $user->setArrivedInFrance(new \DateTime($data['arrivedInFrance']));
        }

        // Valider
        $errors = $validator->validate($user);
        if (count($errors) > 0) {
            return $this->json(['error' => (string) $errors], 400);
        }

        // Sauvegarder
        $entityManager->persist($user);
        $entityManager->flush();

        return $this->json([
            'message' => 'User registered successfully',
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'name' => $user->getName(),
                'userType' => $user->getUserType(),
                'city' => $user->getCity(),
            ]
        ], 201);
    }
}
