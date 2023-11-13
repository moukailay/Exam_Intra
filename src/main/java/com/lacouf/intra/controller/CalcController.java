package com.lacouf.intra.controller;

import com.lacouf.intra.model.Result;
import com.lacouf.intra.service.Calcservice.CalcService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class CalcController {

    private CalcService calcService;

    public CalcController(CalcService calcService) {
        this.calcService = calcService;
    }

    // à compléter
    @GetMapping("/add")
    public ResponseEntity<Result> add(@RequestParam Integer one, @RequestParam Integer two) {
        return ResponseEntity.ok(new Result(one, two, calcService.add(one, two)));
    }

// à compléter
    @GetMapping("/sub")
    public ResponseEntity<Result> sub(@RequestParam Integer one, @RequestParam Integer two) {
        return ResponseEntity.ok(new Result(one, two, calcService.sub(one, two)));
    }
}
