<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TransactionRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TransactionRepository::class)]
#[ApiResource]
class Transaction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $amount = null; // Montant total en centimes

    #[ORM\Column]
    private ?int $commission = null; // Commission de la plateforme en centimes

    #[ORM\Column(length: 20)]
    private ?string $status = 'pending'; // 'pending', 'completed', 'cancelled', 'refunded'

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $paymentMethod = null; // 'stripe', 'cash', etc.

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $stripePaymentId = null; // ID du paiement Stripe

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $completedAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\ManyToOne(inversedBy: 'transactionsAsDemandeur')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $demandeur = null;

    #[ORM\ManyToOne(inversedBy: 'transactionsAsHelper')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $helper = null;

    #[ORM\ManyToOne(inversedBy: 'transactions')]
    private ?Service $service = null;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->status = 'pending';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAmount(): ?int
    {
        return $this->amount;
    }

    public function setAmount(int $amount): static
    {
        $this->amount = $amount;

        return $this;
    }

    // Méthode helper pour obtenir le montant en euros
    public function getAmountInEuros(): float
    {
        return $this->amount / 100;
    }

    public function getCommission(): ?int
    {
        return $this->commission;
    }

    public function setCommission(int $commission): static
    {
        $this->commission = $commission;

        return $this;
    }

    // Méthode helper pour obtenir la commission en euros
    public function getCommissionInEuros(): float
    {
        return $this->commission / 100;
    }

    // Méthode helper pour calculer le montant que reçoit le helper (montant - commission)
    public function getHelperAmount(): int
    {
        return $this->amount - $this->commission;
    }

    public function getHelperAmountInEuros(): float
    {
        return $this->getHelperAmount() / 100;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getPaymentMethod(): ?string
    {
        return $this->paymentMethod;
    }

    public function setPaymentMethod(?string $paymentMethod): static
    {
        $this->paymentMethod = $paymentMethod;

        return $this;
    }

    public function getStripePaymentId(): ?string
    {
        return $this->stripePaymentId;
    }

    public function setStripePaymentId(?string $stripePaymentId): static
    {
        $this->stripePaymentId = $stripePaymentId;

        return $this;
    }

    public function getCompletedAt(): ?\DateTimeInterface
    {
        return $this->completedAt;
    }

    public function setCompletedAt(?\DateTimeInterface $completedAt): static
    {
        $this->completedAt = $completedAt;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): static
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getDemandeur(): ?User
    {
        return $this->demandeur;
    }

    public function setDemandeur(?User $demandeur): static
    {
        $this->demandeur = $demandeur;

        return $this;
    }

    public function getHelper(): ?User
    {
        return $this->helper;
    }

    public function setHelper(?User $helper): static
    {
        $this->helper = $helper;

        return $this;
    }

    public function getService(): ?Service
    {
        return $this->service;
    }

    public function setService(?Service $service): static
    {
        $this->service = $service;

        return $this;
    }

    // Méthode helper pour marquer la transaction comme complétée
    public function markAsCompleted(): static
    {
        $this->status = 'completed';
        $this->completedAt = new \DateTime();

        return $this;
    }

    // Méthode helper pour annuler la transaction
    public function cancel(): static
    {
        $this->status = 'cancelled';

        return $this;
    }

    // Méthode helper pour rembourser la transaction
    public function refund(): static
    {
        $this->status = 'refunded';

        return $this;
    }
}