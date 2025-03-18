package com.app.controller;

import com.app.service.SentimentService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/sentiment")
@CrossOrigin(origins = "*")
public class SentimentController {
    private final SentimentService sentimentService;

    public SentimentController(SentimentService sentimentService) {
        this.sentimentService = sentimentService;
    }

    @PostMapping("/analyze")
    public Map<String, Object> analyzeSentiment(@RequestBody Map<String, String> payload) {
        String comment = payload.get("comment");
        return sentimentService.analyze(comment);
    }
}
