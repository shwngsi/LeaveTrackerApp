package com.leave.tracker.springservice;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Column;
import javax.persistence.Id;

@Entity
@Table(name="employeeleave")
public class EmployeeLeave {

	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Column(name="leave_id")
	 private int id;

	 @Column(name="leave_name")
	 private String leaveName;

	 @Column(name="leave_description")
	 private String leaveDescription;

	 @Column(name="leave_status")
	 private String leaveStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getLeaveName() {
		return leaveName;
	}

	public void setLeaveName(String leaveName) {
		this.leaveName = leaveName;
	}

	public String getLeaveDescription() {
		return leaveDescription;
	}

	public void setLeaveDescription(String leaveDescription) {
		this.leaveDescription = leaveDescription;
	}

	public String getLeaveStatus() {
		return leaveStatus;
	}

	public void setLeaveStatus(String leaveStatus) {
		this.leaveStatus = leaveStatus;
	}

}
