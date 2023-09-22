package com.example.Data.repository;

import com.example.Data.model.Visualization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface VisualRepository extends JpaRepository<Visualization,Integer> {
    List<Visualization> findByCountry(String country);

    List<Visualization> findByCity(String city);

    List<Visualization> findByIntensity(int intensity);

    List<Visualization> findByLikelihood(int likelihood);

    List<Visualization> findByRelevance(int relevance);

    List<Visualization> findByEndyear(int endyear);

    List<Visualization> findByTopic(String topic);

    List<Visualization> findBySector(String sector);

    List<Visualization> findBySwot(String swot);

    List<Visualization> findBySource(String source);

    List<Visualization> findByRegion(String region);
}
