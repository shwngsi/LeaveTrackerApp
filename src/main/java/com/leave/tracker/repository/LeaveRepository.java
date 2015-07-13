package com.leave.tracker.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.leave.tracker.entity.EmployeeLeave;

public class LeaveRepository {
	
	@RepositoryRestResource
	public interface TaskRepository extends CrudRepository<EmployeeLeave, Integer> {

	 List<EmployeeLeave> findByLeaveStatus(@Param("status") String taskStatus);

	}


}
