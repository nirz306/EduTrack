package com.example.demo.model;

public class Student {
    private String name;
    private String subjectName;
    private int total_present;
    private int total_absent;

    // Getters and setters
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getSubjectName() {
        return subjectName;
    }
    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public int gettotal_absent() {
        return total_absent;
    }
    public void settotal_absent(int a) {
        this.total_absent = a;
    }

    public int gettotal_present() {
        return total_present;
    }
    public void settotal_present(int a) {
        this.total_present = a;
    }
}
