insert into addresses (city, street, zip)
values('Fairfield', '1000 N 4th St', 52557),
      ('Fairfield', '1020 N 4th St', 52554);

insert into categories (name)
values('Laptop'),
    ('Phone');

insert into products (name, price, rating, category_id)
values ('Macbook', 1200, 4.5, 1),
    ('Iphone 12', 900, 4.8, 2);

insert into role (role)
values ('ADMIN'),
       ('USER');

insert into users (email, first_name, last_name, password, address_id)
values ('bipul@abc.com', 'Bipul', 'Ranjtikar', '$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2', 1), --123
       ('john@abc.com', 'John', 'Doe', '$2a$12$IKEQb00u5QpZMx4v5zMweu.3wrq0pS7XLCHO4yHZ.BW/yvWu1feo2', 2);  --123

insert into users_roles (user_id, roles_id)
values (1, 1),
       (2, 2);

insert into reviews (comment, product_id, user_id)
values('Test comment', 1, 1),
    ('Good Product', 1, 2);