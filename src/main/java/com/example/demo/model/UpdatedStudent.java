package com.example.demo.model;

public class UpdatedStudent{
    
    private String subjectName;
    private String totalPresentAbsent;
    private double percentage;

    // Getters and setters
   
   

    public String getSubjectName() {
        return subjectName;
    }
    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String gettotalPresentAbsent() {
        return totalPresentAbsent;
    }
    public void settotalPresentAbsent(String tpa) {
        this.totalPresentAbsent =tpa;
    }

    public double getPercentage() {
        return percentage;
    }
    public void setPercentage(double p) {
        this.percentage = p;
    }
}
