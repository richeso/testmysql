set userid=root;
set passwd=p@ssw0rd;
--  connect MySQL.//localhost:3306/MYSQL;
--  create database todo;
--  commit;
connect MySQL.//localhost:3306/todo;
commit;
DROP TABLE todo.todolist;
commit;
grant all on todo.* to 'root'@'localhost' identified by 'p@ssw0rd';
commit; 
 
CREATE TABLE `todo`.`todo_list` ( `id` INT NOT NULL AUTO_INCREMENT , 
`name` VARCHAR(100) NOT NULL , 
`date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , 
PRIMARY KEY (`id`)) ENGINE = InnoDB;

select * from todo_list;
commit;
