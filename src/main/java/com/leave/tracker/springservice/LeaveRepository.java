package com.leave.tracker.springservice;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
	@RepositoryRestResource
	public interface LeaveRepository extends CrudRepository<EmployeeLeave, Integer> {

	 List<EmployeeLeave> findAllLeaves();

	}
