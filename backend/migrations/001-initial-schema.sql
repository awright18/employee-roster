-- Up

CREATE TABLE Roster (
    we_ohr VARCHAR(25) PRIMARY KEY,
    ohr INTEGER(9) NOT NULL,
    name VARCHAR(50) NOT NULL,
    week_end DATE NOT NULL,
    role VARCHAR(4),
    shift VARCHAR(3),
    shift_start TIME,
    shift_end TIME,
    offs VARCHAR(3),
    supervisor_1 VARCHAR(50),
    supervisor_2 VARCHAR(50),
    supervisor_3 VARCHAR(50),
    status VARCHAR(3),
    status_date DATE,
    email VARCHAR(50),
    department VARCHAR(4),
    site VARCHAR(3) NOT NULL
);

-- Down

DROP Table Roster;