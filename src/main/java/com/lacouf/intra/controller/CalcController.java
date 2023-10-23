package com.lacouf.intra.controller;

import com.lacouf.intra.model.Result;
import com.lacouf.intra.service.Calcservice.CalcService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CalcController {

    private CalcService calcService;

    public CalcController(CalcService calcService) {
        this.calcService = calcService;
    }

    // à compléter
}
