INSERT INTO user_account (username, password, first_name, last_name, gender, birthday, weight_in_kg, height_in_cm, target_weight, created_at)
VALUES ('demo', '5982616cb6d9b51226d04a28952801d1bab0b24fefa95e75dd6c0b5a80dd9e3d', 'swee chin', 'chua', 'male', '1986-06-21 00:00:00', 100, 174, 80, '2019-04-17 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at)
VALUES ('demo', 100, '2019-04-01 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at)
VALUES ('demo', 95, '2019-04-16 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 94, '2019-04-17 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 92, '2019-04-18 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 90, '2019-04-19 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 92, '2019-04-20 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 93, '2019-04-21 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 90, '2019-04-22 10:16:48');





INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 800, 'Laksa', '2019-04-01 100:00:00');
INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 400, 'Wanton Mee', '2019-04-01 100:00:00');
INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 200, 'Sprite', '2019-04-01 100:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 600, 'Popcorn', '2019-04-16 00:00:00');
INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 500, 'Chocolate Ice Cream', '2019-04-16 00:00:00');
INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at)
VALUES ('demo', 200, 'Coke', '2019-04-16 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 400, 'Grilled Fish', '2019-04-17 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 500, 'Prawn Noodle', '2019-04-18 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 600, 'Fried Noodle', '2019-04-19 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 400, 'Coke', '2019-04-20 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 90, 'Watermelon', '2019-04-21 00:00:00');

INSERT INTO user_calorie_intake (fk_user_account_username, calorie, description, created_at )
VALUES ('demo', 100, 'Banana', '2019-04-22 00:00:00');