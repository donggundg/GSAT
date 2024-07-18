package com.skku.gsat;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamAccessRepository extends JpaRepository<ExamAccess, Long> {
    //ExamAccess findByExamId(Long examId);
    //ExamAccess findByExamIdAndUserId(Long examId, Long userId);
    //ExamAccess findByUserId(Long userId);
}
