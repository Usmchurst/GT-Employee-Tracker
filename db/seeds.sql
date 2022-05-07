use employees;

INSERT INTO department
    (name)
VALUES
    ('Microbiology'),
    ('Chemistry'),
    ('Physics'),
    ('Legal');

INSERT INTO role 
    (title, salary, department_id)
VALUES
    ('Bio Lead', 135000, 1),
    ('Salesrep', 180000, 1),
    ('Lead Chemist', 122000, 2),
    ('Bio Engineer', 110000, 2),
    ('Engineer Manager', 190000, 3),
    ('Lead Accountant', 90000, 3),
    ('General Counsel', 450000, 4),
    ('Leagal Cheif', 290000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Rick Flair', 'Doe', 1, NULL),
    ('Ravishing', 'Rickrude', 2, 1),
    ('Jimmy ', 'Heart', 3, NULL),
    ('Roddy', 'Piper', 4, 3),
    ('Booker', 'T', 5, NULL),
    ('Hulk', 'Hogan', 6, 5),
    ('The', 'Rock', 7, NULL),
    ('Randy', 'Savage', 8, 7);