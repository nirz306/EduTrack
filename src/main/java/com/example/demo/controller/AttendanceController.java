package com.example.demo.controller;

import com.example.demo.dao.AttendanceDAO;
import com.example.demo.model.Attendance;
import com.example.demo.model.DateWise;
import com.example.demo.model.Student;
import com.example.demo.model.UpdatedStudent;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AttendanceController {

	
	AttendanceDAO attendanceDAO = new AttendanceDAO();

    /*@GetMapping("/attendance")
    public List<Attendance> getAttendanceByStudentId(@RequestParam int studentId) {
        return attendanceDAO.getAttendanceByStudentId(studentId);
    }
    */
    
    //@GetMapping("/student")
    /*public List<Student> getTotalAbsentTotalPresentByStudentId(@RequestParam int studentId) {
        return attendanceDAO.getTotalAbsentTotalPresentByStudentId(studentId);
    }
    */
	
	 @GetMapping("/dashboard")
    public List<UpdatedStudent> getDashboard(@RequestParam int studentId) {
        return attendanceDAO.getDashboard(studentId);
    }
	 
	 @GetMapping("/datewise")
	    public List<DateWise> getDatewise(@RequestParam int studentId) {
	        return attendanceDAO.getDatewise(studentId);
	    }
    
    
}
