package com.example.demo.controller;

import com.example.demo.dao.AttendanceDAO;
import com.example.demo.model.Attendance;
import com.example.demo.model.Student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AttendanceController {

	
	AttendanceDAO attendanceDAO = new AttendanceDAO();

    @GetMapping("/attendance")
    public List<Attendance> getAttendanceByStudentId(@RequestParam int studentId) {
        return attendanceDAO.getAttendanceByStudentId(studentId);
    }
    
    @GetMapping("/student")
    public List<Student> getTotalAbsentTotalPresentByStudentId(@RequestParam int studentId) {
        return attendanceDAO.getTotalAbsentTotalPresentByStudentId(studentId);
    }
}
