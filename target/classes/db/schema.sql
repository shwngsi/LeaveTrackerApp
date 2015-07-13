create database leavetracker;
use leavetracker;
create table employee(employee_id int not null, employee_name varchar(100) not null,primary key(employee_id));
insert into employee values(1,'Alex S');
create table employeeleave(leave_id int not null auto_increment, leave_name varchar(100) not null, leave_description text,leave_status varchar(20),leave_start_time datetime not null default CURRENT_TIMESTAMP,leave_end_time datetime not null default CURRENT_TIMESTAMP,primary key(leave_id));
insert into employeeleave values(1,'Sick Leave','Sick With Fever','Approved',curtime(),curtime() + INTERVAL 2 HOUR);
insert into employeeleave values(2,'Privilege Leave','Family Function','Pending',curtime(),curtime() + INTERVAL 2 HOUR);

