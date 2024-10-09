package com.example.demo.dao;

import com.example.demo.config.DatabaseConfig;
import com.example.demo.model.Attendance;
import com.example.demo.model.Student;
import com.example.demo.model.UpdatedStudent;

import java.sql.*;
import java.util.*;

public class AttendanceDAO 
{
	
	public List<Attendance> getAttendanceByStudentId(int studentId) {
        List<Attendance> attendanceList = new ArrayList<>();
        String sql = "SELECT s.name, sub.subjectName, a.attendanceDate, a.status FROM attendance a "
                   + "JOIN student s ON a.studentId = s.studentId "
                   + "JOIN subjects sub ON a.subjectId = sub.subjectId WHERE s.studentId = ? ORDER BY attendanceDate";

        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, studentId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Attendance attendance = new Attendance();
                attendance.setName(rs.getString("name"));
                attendance.setSubjectName(rs.getString("subjectName"));
                attendance.setAttendanceDate(rs.getString("attendanceDate"));
                attendance.setStatus(rs.getString("status"));

                attendanceList.add(attendance);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return attendanceList;
    }
	
	
	public List<Student> getTotalAbsentTotalPresentByStudentId(int studentId) {
        List<Student> studentList = new ArrayList<>();
        String sql = "select s.name, sub.subjectName , count(case when a.status = 'P' then 1 end) as total_present , count(case when a.status = 'A' "
        		+ "then 1 end) as total_absent from attendance a join student s on a.studentId = s.studentId join subjects sub "
        		+ " on a.subjectId = sub.subjectId where s.studentId = ? group by s.name , sub.subjectName";

        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, studentId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                Student student = new Student();
                student.setName(rs.getString("name"));
                student.setSubjectName(rs.getString("subjectName"));
                student.settotal_absent(rs.getInt("total_absent"));
                student.settotal_absent(rs.getInt("total_present"));

                studentList.add(student);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return studentList;
    }
	
	public List<UpdatedStudent> getDashboard(int studentId) {
        List<UpdatedStudent> dashboardList = new ArrayList<>();
        String sql = "SELECT  sub.subjectName, count(case when a.status = 'P' then 1 end) as totalPresentAbsent, count(case when a.status = 'P' then 1 end) *100.0 / count(*) as percentage FROM attendance a "
                   + "JOIN student s ON a.studentId = s.studentId "
                   + "JOIN subjects sub ON a.subjectId = sub.subjectId WHERE s.studentId = ?  group by s.name , sub.subjectName";

        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, studentId);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                UpdatedStudent updatedS = new UpdatedStudent();
               
                updatedS.setSubjectName(rs.getString("subjectName"));
                updatedS.settotalPresentAbsent(rs.getString("totalPresentAbsent"));
                updatedS.setPercentage(rs.getDouble("percentage"));

                dashboardList.add(updatedS);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dashboardList;
    }
	
	
	
	

}
