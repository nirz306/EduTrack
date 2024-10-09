package com.example.demo.model;

public class UpdatedStudent{
    
    private String subjectName;
    private String totalPresent;
    private String totalLectures;
    private double percentage;

    // Getters and setters
   
   

    public String getSubjectName() {
        return subjectName;
    }
    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String gettotalPresent() {
        return totalPresent;
    }
    public void settotalPresent(String tp) {
        this.totalPresent =tp;
    }

    
    public String gettotalLectures() {
        return totalLectures;
    }
    public void settotalLectures(String tl) {
        this.totalLectures =tl;
    }

    public double getPercentage() {
        return percentage;
    }
    public void setPercentage(double p) {
        this.percentage = p;
    }
}
