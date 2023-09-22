package com.example.Data.controller;

import com.example.Data.model.Visualization;
import com.example.Data.repository.VisualRepository;
import com.example.Data.service.VisualService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class VisualController {
    @Autowired
    private VisualService vs1;
    @Autowired
    private VisualRepository vs;

    @GetMapping("/visuals")
    private List<Visualization> getAllVisualizations(){
        return this.vs1.searchAllData();
    }

    @GetMapping("/filter")
    public List<Visualization> filterByCountry(@RequestParam String country) {
        return vs.findByCountry(country);
    }

    @GetMapping("/filterregion")
    public List<Visualization> filterByRegion(@RequestParam String region) {
        return vs.findByRegion(region);
    }

    @GetMapping("/filtertopic")
    public List<Visualization> filterByTopic(@RequestParam String topic) {
        return vs.findByTopic(topic);
    }

    @GetMapping("/filtersector")
    public List<Visualization> filterBySector(@RequestParam String sector) {
        return vs.findBySector(sector);
    }

    @GetMapping("/filtercity")
    public List<Visualization> filterByCity(@RequestParam String city) {
        return vs.findByCity(city);
    }

    @GetMapping("/filterIntensity")
    public List<Visualization> filterByIntensity(@RequestParam int intensity) {
        return vs.findByIntensity(intensity);
    }

    @GetMapping("/filterLikelihood")
    public List<Visualization> filterByLikelihood(@RequestParam int Likelihood) {
        return vs.findByLikelihood(Likelihood);
    }

    @GetMapping("/filterRelevance")
    public List<Visualization> filterByrelevance(@RequestParam int relevance) {
        return vs.findByRelevance(relevance);
    }

    @GetMapping("/filterEndyear")
    public List<Visualization> filterByEndyear(@RequestParam int endyear) {
        return vs.findByEndyear(endyear);
    }

    @GetMapping("/filtersource")
    public List<Visualization> filterBySource(@RequestParam String source) {
        return vs.findBySource(source);
    }

    @GetMapping("/filterswot")
    public List<Visualization> filterBySwot(@RequestParam String swot) {
        return vs.findBySwot(swot);
    }

}
