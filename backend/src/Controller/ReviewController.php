<?php

namespace App\Controller;

use App\Entity\Review;
use App\Entity\Service;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ReviewController extends AbstractController
{
    // Créer un avis
    #[Route('/api/reviews', name: 'api_review_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['rating']) || !isset($data['comment']) || !isset($data['serviceId']) || !isset($data['authorId'])) {
            return $this->json(['error' => 'Missing required fields'], 400);
        }

        $service = $entityManager->getRepository(Service::class)->find($data['serviceId']);
        $author = $entityManager->getRepository(User::class)->find($data['authorId']);

        if (!$service || !$author) {
            return $this->json(['error' => 'Service or Author not found'], 404);
        }

        $review = new Review();
        $review->setRating($data['rating']);
        $review->setComment($data['comment']);
        $review->setService($service);
        $review->setAuthor($author);

        $entityManager->persist($review);
        $entityManager->flush();

        return $this->json([
            'message' => 'Review created successfully',
            'review' => [
                'id' => $review->getId(),
                'rating' => $review->getRating(),
                'comment' => $review->getComment(),
            ]
        ], 201);
    }
}
