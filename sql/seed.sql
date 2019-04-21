INSERT INTO user_account (username, password, first_name, last_name, gender, birthday, weight_in_kg, height_in_cm, target_weight, created_at)
VALUES ('demo', '5982616cb6d9b51226d04a28952801d1bab0b24fefa95e75dd6c0b5a80dd9e3d', 'swee chin', 'chua', 'male', '1986-06-21 00:00:00', 60, 174, 50, '2019-04-17 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at)
VALUES ('demo', 60, '2019-04-17 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 100, '2019-04-16 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 58, '2019-04-18 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 58, '2019-04-19 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 58, '2019-04-20 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 58, '2019-04-30 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 58, '2019-05-01 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at )
VALUES ('demo', 55, '2019-05-02 10:16:48');