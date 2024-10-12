package com.example.demo.dao;

import com.example.demo.config.DatabaseConfig;
import com.example.demo.model.Attendance;
import com.example.demo.model.DateWise;
import com.example.demo.model.Student;
import com.example.demo.model.TeacherDashboard;
import com.example.demo.model.TeacherDatewise;
import com.example.demo.model.UpdatedStudent;

import java.sql.*;
import java.util.*;

public class AttendanceDAO 
{
	
//	public List<Attendance> getAttendanceByStudentId(int rollNo) {
//        List<Attendance> attendanceList = new ArrayList<>();
//        String sql = "SELECT s.name, sub.subjectName, a.attendanceDate, a.status FROM attendance a "
//                   + "JOIN student s ON a.studentId = s.studentId "
//                   + "JOIN subjects sub ON a.subjectId = sub.subjectId WHERE s.rollNo = ? ORDER BY attendanceDate";
//
//        try (Connection connection = DatabaseConfig.getConnection();
//             PreparedStatement statement = connection.prepareStatement(sql)) {
//
//            statement.setInt(1, rollNo);
//            ResultSet rs = statement.executeQuery();
//
//            while (rs.next()) {
//                Attendance attendance = new Attendance();
//                attendance.setName(rs.getString("name"));
//                attendance.setSubjectName(rs.getString("subjectName"));
//                attendance.setAttendanceDate(rs.getString("attendanceDate"));
//                attendance.setStatus(rs.getString("status"));
//
//                attendanceList.add(attendance);
//            }
//
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return attendanceList;
//    }
//	
//	
//	public List<Student> getTotalAbsentTotalPresentByStudentId(int rollNo) {
//        List<Student> studentList = new ArrayList<>();
//        String sql = "select s.name, sub.subjectName , count(case when a.status = 'P' then 1 end) as total_present , count(case when a.status = 'A' "
//        		+ "then 1 end) as total_absent from attendance a join student s on a.studentId = s.studentId join subjects sub "
//        		+ " on a.subjectId = sub.subjectId where s.rollNo = ? group by s.name , sub.subjectName";
//
//        try (Connection connection = DatabaseConfig.getConnection();
//             PreparedStatement statement = connection.prepareStatement(sql)) {
//
//            statement.setInt(1, rollNo);
//            ResultSet rs = statement.executeQuery();
//
//            while (rs.next()) {
//                Student student = new Student();
//                student.setName(rs.getString("name"));
//                student.setSubjectName(rs.getString("subjectName"));
//                student.settotal_absent(rs.getInt("total_absent"));
//                student.settotal_absent(rs.getInt("total_present"));
//
//                studentList.add(student);
//            }
//
//        } catch (SQLException e) {
//            e.printStackTrace();
//        }
//        return studentList;
//    }
	
	public List<UpdatedStudent> getDashboard(int rollNo) {
        List<UpdatedStudent> dashboardList = new ArrayList<>();
        String sql = "SELECT sub.subjectName, "
                + "count(CASE WHEN a.status = 'P' THEN 1 END) AS totalPresent, "
                + "count(*) AS totalLectures, "
                + "count(CASE WHEN a.status = 'P' THEN 1 END) * 100.0 / count(*) AS percentage "
                + "FROM attendance a "
                + "JOIN student s ON a.rollNo = s.rollNo "
                + "JOIN subjects sub ON a.subjectId = sub.subjectId "
                + "WHERE s.rollNo = ? "
                + "GROUP BY sub.subjectName";


        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, rollNo);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
                UpdatedStudent updatedS = new UpdatedStudent();
               
                updatedS.setSubjectName(rs.getString("subjectName"));
                updatedS.settotalPresent(rs.getString("totalPresent"));
                updatedS.settotalLectures(rs.getString("totalLectures"));
                updatedS.setPercentage(rs.getDouble("percentage"));

                dashboardList.add(updatedS);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return dashboardList;
    }
	
	public List<DateWise> getDatewise(int rollNo) {
        List<DateWise> datewiseList = new ArrayList<>();
        String sql = "SELECT a.attendanceDate, "
                + "MAX(CASE WHEN sub.subjectName = 'DBMS' THEN a.status END) AS DBMS, "
                + "MAX(CASE WHEN sub.subjectName = 'TOC' THEN a.status END) AS TOC, "
                + "MAX(CASE WHEN sub.subjectName = 'CNS' THEN a.status END) AS CNS, "
                + "MAX(CASE WHEN sub.subjectName = 'SPOS' THEN a.status END) AS SPOS, "
                + "MAX(CASE WHEN sub.subjectName = 'HCI' THEN a.status END) AS HCI "
                + "FROM attendance a "
                + "JOIN subjects sub ON a.subjectId = sub.subjectId "
                + "JOIN student s ON a.rollNo = s.rollNo "
                + "WHERE s.rollNo = ? "
                + "GROUP BY a.attendanceDate "
                + "ORDER BY a.attendanceDate";


        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setInt(1, rollNo);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
            	DateWise dw = new DateWise();
               
                dw.setAttendanceDate(rs.getString("attendanceDate"));
                dw.setDbms_status(rs.getString("DBMS"));
                dw.setToc_status(rs.getString("TOC"));
                dw.setCns_status(rs.getString("CNS"));
                dw.setSpos_status(rs.getString("SPOS"));
                dw.setHci_status(rs.getString("HCI"));
                

                datewiseList.add(dw);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return datewiseList;
    }
	
	
	public List<TeacherDatewise> getTeacherDatewise(String subjectName) {
        List<TeacherDatewise> t_List = new ArrayList<>();
        String sql = "SELECT a.attendanceDate, "
                + "MAX(CASE WHEN s.rollNo = 31101 THEN a.status END) AS '31101', "
                + "MAX(CASE WHEN s.rollNo = 31102 THEN a.status END) AS '31102', "
                + "MAX(CASE WHEN s.rollNo = 31103 THEN a.status END) AS '31103', "
                + "MAX(CASE WHEN s.rollNo = 31104 THEN a.status END) AS '31104', "
                + "MAX(CASE WHEN s.rollNo = 31105 THEN a.status END) AS '31105', "
                + "MAX(CASE WHEN s.rollNo = 31106 THEN a.status END) AS '31106', "
                + "MAX(CASE WHEN s.rollNo = 31107 THEN a.status END) AS '31107', "
                + "MAX(CASE WHEN s.rollNo = 31108 THEN a.status END) AS '31108', "
                + "MAX(CASE WHEN s.rollNo = 31109 THEN a.status END) AS '31109', "
                + "MAX(CASE WHEN s.rollNo = 31110 THEN a.status END) AS '31110', "
                + "MAX(CASE WHEN s.rollNo = 31111 THEN a.status END) AS '31111', "
                + "MAX(CASE WHEN s.rollNo = 31112 THEN a.status END) AS '31112', "
                + "MAX(CASE WHEN s.rollNo = 31113 THEN a.status END) AS '31113', "
                + "MAX(CASE WHEN s.rollNo = 31114 THEN a.status END) AS '31114', "
                + "MAX(CASE WHEN s.rollNo = 31115 THEN a.status END) AS '31115', "
                + "MAX(CASE WHEN s.rollNo = 31116 THEN a.status END) AS '31116', "
                + "MAX(CASE WHEN s.rollNo = 31117 THEN a.status END) AS '31117', "
                + "MAX(CASE WHEN s.rollNo = 31118 THEN a.status END) AS '31118', "
                + "MAX(CASE WHEN s.rollNo = 31119 THEN a.status END) AS '31119', "
                + "MAX(CASE WHEN s.rollNo = 31120 THEN a.status END) AS '31120' "
                
              
                + "FROM attendance a "
                + "JOIN subjects sub ON a.subjectId = sub.subjectId "
                + "JOIN student s ON a.rollNo = s.rollNo "
                + "WHERE sub.subjectName = ? "  
                + "GROUP BY a.attendanceDate "
                + "ORDER BY a.attendanceDate";



        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, subjectName);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
            	TeacherDatewise td = new TeacherDatewise();
               
                td.setAttendanceDate(rs.getString("attendanceDate"));
                td.setS_31101(rs.getString("31101"));
                td.setS_31102(rs.getString("31102"));
                td.setS_31103(rs.getString("31103"));
                td.setS_31104(rs.getString("31104"));
                td.setS_31105(rs.getString("31105"));
                td.setS_31106(rs.getString("31106"));
                td.setS_31107(rs.getString("31107"));
                td.setS_31108(rs.getString("31108"));
                td.setS_31109(rs.getString("31109"));
                td.setS_31110(rs.getString("31110"));
                td.setS_31111(rs.getString("31111"));
                td.setS_31112(rs.getString("31112"));
                td.setS_31113(rs.getString("31113"));
                td.setS_31114(rs.getString("31114"));
                td.setS_31115(rs.getString("31115"));
                td.setS_31116(rs.getString("31116"));
                td.setS_31117(rs.getString("31117"));
                td.setS_31118(rs.getString("31118"));
                td.setS_31119(rs.getString("31119"));
                td.setS_31120(rs.getString("31120"));

                t_List.add(td);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return t_List;
    }
	
	public List<TeacherDashboard> getTeacherDashboard(String subjectName) {
		System.out.println("in teacher dashboard function");
        List<TeacherDashboard> td_list = new ArrayList<>();
        String sql = "SELECT a.rollNo, "
                + "CONCAT(ROUND((SUM(CASE WHEN a.status = 'P' THEN 1 ELSE 0 END) / COUNT(*)) * 100, 2), '%') AS 'percentage' "
                + "FROM attendance a "
                + "JOIN subjects sub ON a.subjectId = sub.subjectId "
                + "WHERE sub.subjectName = ? "  
                + "GROUP BY a.rollNo "
                + "ORDER BY a.rollNo";



        try (Connection connection = DatabaseConfig.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, subjectName);
            ResultSet rs = statement.executeQuery();

            while (rs.next()) {
            	TeacherDashboard td = new TeacherDashboard();
            	
            	td.setRollNo(rs.getInt("rollNo"));
            	td.setPercentage(rs.getString("percentage"));
               
               
                

                td_list.add(td);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return td_list;
    }

}
