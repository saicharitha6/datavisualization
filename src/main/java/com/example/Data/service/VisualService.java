package com.example.Data.service;

import com.example.Data.model.Visualization;
import com.example.Data.repository.VisualRepository;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VisualService {
    @Autowired
    private VisualRepository vr;
    public List<Visualization> searchAllData() {
        return this.vr.findAll();
    }
}
