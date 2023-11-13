package com.lacouf.intra.service.Calcservice;

import com.lacouf.intra.model.Result;
import org.springframework.stereotype.Service;

@Service
public class CalcService {
    public int add(Integer one, Integer two) {
        if (one == null || two == null) {
            throw new NullPointerException("One of the operands is null");
        }
        return one + two;
    }


    public int sub(Integer one, Integer two) {
        return one - two;
    }
}
