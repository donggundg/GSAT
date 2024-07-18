package com.skku.gsat;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
    Exam findByExamName(String examName);
}
