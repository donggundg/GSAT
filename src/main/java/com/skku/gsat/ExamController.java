package com.skku.gsat;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Optional;

@Controller
@RequiredArgsConstructor
public class ExamController {
    private final ExamRepository examRepository;

    @GetMapping("/list")
    @ResponseBody
    public List<Exam> examlist() {
        List<Exam> result = examRepository.findAll();
        System.out.println(result);
        return result;
    }
}
