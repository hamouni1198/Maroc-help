<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Service;
use App\Entity\Transaction;
use App\Entity\Review;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AppFixtures extends Fixture
{
    private UserPasswordHasherInterface $passwordHasher;

    public function __construct(UserPasswordHasherInterface $passwordHasher)
    {
        $this->passwordHasher = $passwordHasher;
    }

    public function load(ObjectManager $manager): void
    {
        // ==========================================
        // 1. CRÉER DES HELPERS
        // ==========================================
        
        $helpers = [];
        
        // Helper 1 - Ahmed (Paris)
        $helper1 = new User();
        $helper1->setEmail('ahmed@maroqino.fr');
        $helper1->setPassword($this->passwordHasher->hashPassword($helper1, 'password123'));
        $helper1->setName('Ahmed Bennani');
        $helper1->setPhone('+33612345678');
        $helper1->setCity('Paris');
        $helper1->setUserType('helper');
        $helper1->setProfilePhoto('https://i.pravatar.cc/300?img=12');
        $helper1->setArrivedInFrance(new \DateTime('2019-03-15'));
        $helper1->setLanguages(['français', 'arabe', 'darija']);
        $helper1->setVerified(true);
        $manager->persist($helper1);
        $helpers[] = $helper1;

        // Helper 2 - Fatima (Lyon)
        $helper2 = new User();
        $helper2->setEmail('fatima@maroqino.fr');
        $helper2->setPassword($this->passwordHasher->hashPassword($helper2, 'password123'));
        $helper2->setName('Fatima El Amrani');
        $helper2->setPhone('+33623456789');
        $helper2->setCity('Lyon');
        $helper2->setUserType('helper');
        $helper2->setProfilePhoto('https://i.pravatar.cc/300?img=47');
        $helper2->setArrivedInFrance(new \DateTime('2018-09-20'));
        $helper2->setLanguages(['français', 'arabe', 'anglais']);
        $helper2->setVerified(true);
        $manager->persist($helper2);
        $helpers[] = $helper2;

        // Helper 3 - Youssef (Marseille)
        $helper3 = new User();
        $helper3->setEmail('youssef@maroqino.fr');
        $helper3->setPassword($this->passwordHasher->hashPassword($helper3, 'password123'));
        $helper3->setName('Youssef Idrissi');
        $helper3->setPhone('+33634567890');
        $helper3->setCity('Marseille');
        $helper3->setUserType('helper');
        $helper3->setProfilePhoto('https://i.pravatar.cc/300?img=33');
        $helper3->setArrivedInFrance(new \DateTime('2020-01-10'));
        $helper3->setLanguages(['français', 'darija']);
        $helper3->setVerified(true);
        $manager->persist($helper3);
        $helpers[] = $helper3;

        // Helper 4 - Khadija (Toulouse)
        $helper4 = new User();
        $helper4->setEmail('khadija@maroqino.fr');
        $helper4->setPassword($this->passwordHasher->hashPassword($helper4, 'password123'));
        $helper4->setName('Khadija Benjelloun');
        $helper4->setPhone('+33645678901');
        $helper4->setCity('Toulouse');
        $helper4->setUserType('helper');
        $helper4->setProfilePhoto('https://i.pravatar.cc/300?img=20');
        $helper4->setArrivedInFrance(new \DateTime('2017-06-05'));
        $helper4->setLanguages(['français', 'arabe', 'darija', 'anglais']);
        $helper4->setVerified(true);
        $manager->persist($helper4);
        $helpers[] = $helper4;

        // Helper 5 - Karim (Bordeaux)
        $helper5 = new User();
        $helper5->setEmail('karim@maroqino.fr');
        $helper5->setPassword($this->passwordHasher->hashPassword($helper5, 'password123'));
        $helper5->setName('Karim Alaoui');
        $helper5->setPhone('+33656789012');
        $helper5->setCity('Bordeaux');
        $helper5->setUserType('helper');
        $helper5->setProfilePhoto('https://i.pravatar.cc/300?img=15');
        $helper5->setArrivedInFrance(new \DateTime('2019-11-22'));
        $helper5->setLanguages(['français', 'darija', 'anglais']);
        $helper5->setVerified(true);
        $manager->persist($helper5);
        $helpers[] = $helper5;

        // ==========================================
        // 2. CRÉER DES DEMANDEURS
        // ==========================================
        
        $demandeurs = [];

        // Demandeur 1 - Samira
        $demandeur1 = new User();
        $demandeur1->setEmail('samira@maroqino.fr');
        $demandeur1->setPassword($this->passwordHasher->hashPassword($demandeur1, 'password123'));
        $demandeur1->setName('Samira Zahraoui');
        $demandeur1->setPhone('+33667890123');
        $demandeur1->setCity('Paris');
        $demandeur1->setUserType('demandeur');
        $demandeur1->setProfilePhoto('https://i.pravatar.cc/300?img=5');
        $demandeur1->setArrivedInFrance(new \DateTime('2025-10-01'));
        $demandeur1->setLanguages(['arabe', 'darija', 'français']);
        $demandeur1->setVerified(true);
        $manager->persist($demandeur1);
        $demandeurs[] = $demandeur1;

        // Demandeur 2 - Omar
        $demandeur2 = new User();
        $demandeur2->setEmail('omar@maroqino.fr');
        $demandeur2->setPassword($this->passwordHasher->hashPassword($demandeur2, 'password123'));
        $demandeur2->setName('Omar Tazi');
        $demandeur2->setPhone('+33678901234');
        $demandeur2->setCity('Lyon');
        $demandeur2->setUserType('demandeur');
        $demandeur2->setProfilePhoto('https://i.pravatar.cc/300?img=51');
        $demandeur2->setArrivedInFrance(new \DateTime('2025-11-15'));
        $demandeur2->setLanguages(['arabe', 'français']);
        $demandeur2->setVerified(true);
        $manager->persist($demandeur2);
        $demandeurs[] = $demandeur2;

        // Demandeur 3 - Leila
        $demandeur3 = new User();
        $demandeur3->setEmail('leila@maroqino.fr');
        $demandeur3->setPassword($this->passwordHasher->hashPassword($demandeur3, 'password123'));
        $demandeur3->setName('Leila Berrada');
        $demandeur3->setPhone('+33689012345');
        $demandeur3->setCity('Marseille');
        $demandeur3->setUserType('demandeur');
        $demandeur3->setProfilePhoto('https://i.pravatar.cc/300?img=9');
        $demandeur3->setArrivedInFrance(new \DateTime('2025-12-01'));
        $demandeur3->setLanguages(['darija', 'français']);
        $demandeur3->setVerified(false);
        $manager->persist($demandeur3);
        $demandeurs[] = $demandeur3;

        // ==========================================
        // 3. CRÉER DES SERVICES
        // ==========================================

        $services = [];

        // Service 1 - Ahmed (Paris)
        $service1 = new Service();
        $service1->setTitle('Aide ouverture compte bancaire');
        $service1->setDescription('Je t\'accompagne à la banque et t\'aide à remplir tous les documents nécessaires. Je connais bien les banques qui acceptent les nouveaux arrivants.');
        $service1->setCategory('administratif');
        $service1->setPrice(5000);
        $service1->setCity('Paris');
        $service1->setOnline(false);
        $service1->setAvailability('Lundi-Vendredi après 18h');
        $service1->setPhotos(['https://images.unsplash.com/photo-1554224155-6726b3ff858f']);
        $service1->setStatus('active');
        $service1->setHelper($helper1);
        $manager->persist($service1);
        $services[] = $service1;

        $service2 = new Service();
        $service2->setTitle('Accompagnement préfecture titre de séjour');
        $service2->setDescription('Je t\'aide à préparer ton dossier et t\'accompagne à la préfecture. Je connais tous les documents nécessaires.');
        $service2->setCategory('administratif');
        $service2->setPrice(8000);
        $service2->setCity('Paris');
        $service2->setOnline(false);
        $service2->setAvailability('Sur rendez-vous');
        $service2->setPhotos(['https://images.unsplash.com/photo-1450101499163-c8848c66ca85']);
        $service2->setStatus('active');
        $service2->setHelper($helper1);
        $manager->persist($service2);
        $services[] = $service2;

        // Service 3 - Fatima (Lyon)
        $service3 = new Service();
        $service3->setTitle('Aide recherche appartement');
        $service3->setDescription('Je t\'aide à trouver un appartement adapté. Je connais les bons quartiers de Lyon et les agences qui acceptent les dossiers sans CDI.');
        $service3->setCategory('logement');
        $service3->setPrice(7500);
        $service3->setCity('Lyon');
        $service3->setOnline(false);
        $service3->setAvailability('Week-ends disponibles');
        $service3->setPhotos(['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2']);
        $service3->setStatus('active');
        $service3->setHelper($helper2);
        $manager->persist($service3);
        $services[] = $service3;

        $service4 = new Service();
        $service4->setTitle('Préparation CV français + conseils entretien');
        $service4->setDescription('Je t\'aide à créer un CV au format français et à te préparer pour les entretiens. Je travaille en RH depuis 5 ans.');
        $service4->setCategory('emploi');
        $service4->setPrice(6000);
        $service4->setCity('Lyon');
        $service4->setOnline(true);
        $service4->setAvailability('Tous les jours en soirée');
        $service4->setPhotos(['https://images.unsplash.com/photo-1586281380349-632531db7ed4']);
        $service4->setStatus('active');
        $service4->setHelper($helper2);
        $manager->persist($service4);
        $services[] = $service4;

        // Service 5 - Youssef (Marseille)
        $service5 = new Service();
        $service5->setTitle('Traduction documents FR-AR');
        $service5->setDescription('Je traduis tous tes documents administratifs du français vers l\'arabe ou l\'inverse. Traduction certifiée possible.');
        $service5->setCategory('administratif');
        $service5->setPrice(3500);
        $service5->setCity('Marseille');
        $service5->setOnline(true);
        $service5->setAvailability('24/7 - réponse rapide');
        $service5->setPhotos(['https://images.unsplash.com/photo-1455390582262-044cdead277a']);
        $service5->setStatus('active');
        $service5->setHelper($helper3);
        $manager->persist($service5);
        $services[] = $service5;

        $service6 = new Service();
        $service6->setTitle('Accompagnement CAF et Ameli');
        $service6->setDescription('Je t\'aide avec toutes les démarches CAF (APL) et Ameli (carte vitale). J\'explique tout en détail.');
        $service6->setCategory('administratif');
        $service6->setPrice(4500);
        $service6->setCity('Marseille');
        $service6->setOnline(true);
        $service6->setAvailability('Lundi-Vendredi 14h-19h');
        $service6->setPhotos(['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40']);
        $service6->setStatus('active');
        $service6->setHelper($helper3);
        $manager->persist($service6);
        $services[] = $service6;

        // Service 7 - Khadija (Toulouse)
        $service7 = new Service();
        $service7->setTitle('Inscription école/crèche pour enfants');
        $service7->setDescription('Je t\'aide à inscrire tes enfants à l\'école ou à la crèche. Maman de 2 enfants, je partage mon expérience.');
        $service7->setCategory('vie_pratique');
        $service7->setPrice(4000);
        $service7->setCity('Toulouse');
        $service7->setOnline(true);
        $service7->setAvailability('Après-midi et week-ends');
        $service7->setPhotos(['https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9']);
        $service7->setStatus('active');
        $service7->setHelper($helper4);
        $manager->persist($service7);
        $services[] = $service7;

        $service8 = new Service();
        $service8->setTitle('Découverte quartiers Toulouse');
        $service8->setDescription('Je te fais découvrir les meilleurs quartiers de Toulouse, les commerces halal, les mosquées et tous les bons plans.');
        $service8->setCategory('vie_pratique');
        $service8->setPrice(3000);
        $service8->setCity('Toulouse');
        $service8->setOnline(false);
        $service8->setAvailability('Week-ends uniquement');
        $service8->setPhotos(['https://images.unsplash.com/photo-1477959858617-67f85cf4f1df']);
        $service8->setStatus('active');
        $service8->setHelper($helper4);
        $manager->persist($service8);
        $services[] = $service8;

        // Service 9 - Karim (Bordeaux)
        $service9 = new Service();
        $service9->setTitle('Aide recherche emploi/alternance');
        $service9->setDescription('Je t\'aide à trouver un emploi ou une alternance à Bordeaux. Réseau professionnel, conseils LinkedIn.');
        $service9->setCategory('emploi');
        $service9->setPrice(9000);
        $service9->setCity('Bordeaux');
        $service9->setOnline(true);
        $service9->setAvailability('Soirées en semaine');
        $service9->setPhotos(['https://images.unsplash.com/photo-1521737711867-e3b97375f902']);
        $service9->setStatus('active');
        $service9->setHelper($helper5);
        $manager->persist($service9);
        $services[] = $service9;

        $service10 = new Service();
        $service10->setTitle('Explication système santé français');
        $service10->setDescription('Je t\'explique tout le système de santé : médecin traitant, carte vitale, mutuelle, remboursements.');
        $service10->setCategory('vie_pratique');
        $service10->setPrice(2500);
        $service10->setCity('Bordeaux');
        $service10->setOnline(true);
        $service10->setAvailability('Flexible');
        $service10->setPhotos(['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d']);
        $service10->setStatus('active');
        $service10->setHelper($helper5);
        $manager->persist($service10);
        $services[] = $service10;

        // ==========================================
        // 4. CRÉER DES TRANSACTIONS
        // ==========================================

        $transaction1 = new Transaction();
        $transaction1->setAmount(5000);
        $transaction1->setCommission(750);
        $transaction1->setStatus('completed');
        $transaction1->setPaymentMethod('stripe');
        $transaction1->setStripePaymentId('pi_1234567890abcdef');
        $transaction1->setDemandeur($demandeur1);
        $transaction1->setHelper($helper1);
        $transaction1->setService($service1);
        $transaction1->setCompletedAt(new \DateTime('-2 days'));
        $manager->persist($transaction1);

        $transaction2 = new Transaction();
        $transaction2->setAmount(7500);
        $transaction2->setCommission(1125);
        $transaction2->setStatus('completed');
        $transaction2->setPaymentMethod('stripe');
        $transaction2->setStripePaymentId('pi_0987654321fedcba');
        $transaction2->setDemandeur($demandeur2);
        $transaction2->setHelper($helper2);
        $transaction2->setService($service3);
        $transaction2->setCompletedAt(new \DateTime('-5 days'));
        $manager->persist($transaction2);

        $transaction3 = new Transaction();
        $transaction3->setAmount(3500);
        $transaction3->setCommission(525);
        $transaction3->setStatus('pending');
        $transaction3->setPaymentMethod('stripe');
        $transaction3->setDemandeur($demandeur3);
        $transaction3->setHelper($helper3);
        $transaction3->setService($service5);
        $manager->persist($transaction3);

        // ==========================================
        // 5. CRÉER DES AVIS
        // ==========================================

        $review1 = new Review();
        $review1->setRating(5);
        $review1->setComment('Excellent service ! Ahmed m\'a vraiment bien aidé. Je recommande à 100% !');
        $review1->setAuthor($demandeur1);
        $review1->setService($service1);
        $manager->persist($review1);

        $review2 = new Review();
        $review2->setRating(5);
        $review2->setComment('Fatima connaît vraiment bien Lyon ! J\'ai trouvé un super appartement en moins d\'une semaine.');
        $review2->setAuthor($demandeur2);
        $review2->setService($service3);
        $manager->persist($review2);

        $review3 = new Review();
        $review3->setRating(4);
        $review3->setComment('Très bon service, mon CV est au top ! Un peu cher mais ça vaut le coup.');
        $review3->setAuthor($demandeur1);
        $review3->setService($service4);
        $manager->persist($review3);

        $review4 = new Review();
        $review4->setRating(5);
        $review4->setComment('Youssef m\'a sauvé avec la CAF ! J\'ai reçu mes APL en 3 semaines. Merci !');
        $review4->setAuthor($demandeur3);
        $review4->setService($service6);
        $manager->persist($review4);

        $manager->flush();
    }
}