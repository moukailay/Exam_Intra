package com.lacouf.intra;

import com.lacouf.intra.controller.CalcController;
import com.lacouf.intra.service.Calcservice.CalcService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(CalcController.class)
class ExamIntraApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private CalcService calcService;

    @InjectMocks
    private ExamIntraApplicationTests examIntraApplicationTests;

    @Test
    void addTest() {
        when(calcService.add(10, 20)).thenReturn(30);

        int result = calcService.add(10, 20);

        assertEquals(30, result, "10 + 20 should equal 30");

        verify(calcService).add(10, 20);
    }

    @Test
    void subTest() {
        when(calcService.sub(20, 10)).thenReturn(10);

        int result = calcService.sub(20, 10);

        assertEquals(10, result, "20 - 10 should equal 10");

        verify(calcService).sub(20, 10);
    }


    @Test
    void addControllerTest() throws Exception {
        // Configurer le comportement du mock
        when(calcService.add(10, 20)).thenReturn(30);

        // Exécuter la requête et vérifier la réponse
        mockMvc.perform(get("/add")
                        .param("one", "10")
                        .param("two", "20")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.one").value(10))
                .andExpect(jsonPath("$.two").value(20))
                .andExpect(jsonPath("$.result").value(30));
    }

    @Test
    void subControllerTest() throws Exception {
        // Configurer le comportement du mock
        when(calcService.sub(20, 10)).thenReturn(10);

        // Exécuter la requête et vérifier la réponse
        mockMvc.perform(get("/sub")
                        .param("one", "20")
                        .param("two", "10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.one").value(20))
                .andExpect(jsonPath("$.two").value(10))
                .andExpect(jsonPath("$.result").value(10));
    }


}
