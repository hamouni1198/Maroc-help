<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260203152239 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE review (id INT AUTO_INCREMENT NOT NULL, rating INT NOT NULL, comment LONGTEXT NOT NULL, created_at DATETIME NOT NULL, author_id INT NOT NULL, service_id INT NOT NULL, INDEX IDX_794381C6F675F31B (author_id), INDEX IDX_794381C6ED5CA9E6 (service_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, category VARCHAR(50) NOT NULL, price INT NOT NULL, city VARCHAR(100) NOT NULL, availability LONGTEXT DEFAULT NULL, is_online TINYINT NOT NULL, photos JSON DEFAULT NULL, status VARCHAR(20) NOT NULL, created_at DATETIME NOT NULL, helper_id INT NOT NULL, INDEX IDX_E19D9AD2D7693E95 (helper_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE transaction (id INT AUTO_INCREMENT NOT NULL, amount INT NOT NULL, commission INT NOT NULL, status VARCHAR(20) NOT NULL, payment_method VARCHAR(50) DEFAULT NULL, stripe_payment_id VARCHAR(255) DEFAULT NULL, completed_at DATETIME DEFAULT NULL, created_at DATETIME NOT NULL, demandeur_id INT NOT NULL, helper_id INT NOT NULL, service_id INT DEFAULT NULL, INDEX IDX_723705D195A6EE59 (demandeur_id), INDEX IDX_723705D1D7693E95 (helper_id), INDEX IDX_723705D1ED5CA9E6 (service_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, phone VARCHAR(20) DEFAULT NULL, city VARCHAR(100) DEFAULT NULL, user_type VARCHAR(20) NOT NULL, profile_photo VARCHAR(255) DEFAULT NULL, arrived_in_france DATE DEFAULT NULL, languages JSON DEFAULT NULL, is_verified TINYINT NOT NULL, created_at DATETIME NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6F675F31B FOREIGN KEY (author_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE review ADD CONSTRAINT FK_794381C6ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id)');
        $this->addSql('ALTER TABLE service ADD CONSTRAINT FK_E19D9AD2D7693E95 FOREIGN KEY (helper_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D195A6EE59 FOREIGN KEY (demandeur_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D1D7693E95 FOREIGN KEY (helper_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE transaction ADD CONSTRAINT FK_723705D1ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6F675F31B');
        $this->addSql('ALTER TABLE review DROP FOREIGN KEY FK_794381C6ED5CA9E6');
        $this->addSql('ALTER TABLE service DROP FOREIGN KEY FK_E19D9AD2D7693E95');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D195A6EE59');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D1D7693E95');
        $this->addSql('ALTER TABLE transaction DROP FOREIGN KEY FK_723705D1ED5CA9E6');
        $this->addSql('DROP TABLE review');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE transaction');
        $this->addSql('DROP TABLE `user`');
    }
}
