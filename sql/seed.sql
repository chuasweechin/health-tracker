INSERT INTO user_account (username, password, first_name, last_name, gender, birthday, weight_in_kg, height_in_cm, created_at)
VALUES ('demo', '5982616cb6d9b51226d04a28952801d1bab0b24fefa95e75dd6c0b5a80dd9e3d', 'swee chin', 'chua', 'male', '1986-06-21 00:00:00', 60, 174, '2019-04-17 10:16:48');

INSERT INTO user_weight_log (fk_user_account_username, weight_in_kg, created_at)
VALUES ('demo', 60, '2019-04-17 10:16:48');

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('push-up (vigorous effort)', 'calisthenics', '02020', 8.0, 0.132, 0.0022);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('sit-up (vigorous effort)', 'calisthenics', '02020', 8.0, 0.133, 0.0022);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('pull-up (vigorous effort)', 'calisthenics', '02020', 8.0, 0.133, 0.0022);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('jumping jack (vigorous effort)', 'calisthenics', '02020', 8.0, 0.133, 0.0022);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('push-up (moderate effort)', 'calisthenics', '02022', 3.8, 0.063, 0.001);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('sit-up (moderate effort)', 'calisthenics', '02022', 3.8, 0.063, 0.001);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('pull-up (moderate effort)', 'calisthenics', '02022', 3.8, 0.063, 0.001);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('jumping jack (moderate effort)', 'calisthenics', '02022', 3.8, 0.063, 0.001);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('lunges (moderate effort)', 'calisthenics', '02022', 3.8, 0.063, 0.001);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('push-up (light effort)', 'calisthenics', '02024', 2.8, 0.047, 0.0008);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('sit-up (light effort)', 'calisthenics', '02024', 2.8, 0.047, 0.0008);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('pull-up (light effort)', 'calisthenics', '02024', 2.8, 0.047, 0.0008);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('jumping jack (light effort)', 'calisthenics', '02024', 2.8, 0.047, 0.0008);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('lunges (light effort)', 'calisthenics', '02024', 2.8, 0.047, 0.0008);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('abdominal crunches', 'calisthenics', '02024', 2.8, 0.047, 0.0008);


INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('walking up & down from floor', 'walking', '02030', 3.5, 0.058, 0.0009);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('walking', 'walking', '17161', 2.5, 0.042, 0.0007);


INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running up stairs', 'running', '12170', 15.0, 0.25, 0.0042);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('jogging on the spot', 'running', '12025', 8.0, 0.133, 0.0022);


INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 4 mile/h (15 min/mile)', 'running', '12029', 6.0, 0.1, 0.0017);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 5 mile/h (12 min/mile)', 'running', '12030', 8.3, 0.138, 0.0023);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 6 mile/h (10 min/mile)', 'running', '12050', 9.8, 0.163, 0.0027);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 7 mile/h (8.5 min/mile)', 'running', '12070', 11.0, 0.183, 0.003);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 8 mile/h (7.5 min/mile)', 'running', '12090', 11.8, 0.196, 0.0033);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 9 mile/h (6.5 min/mile)', 'running', '12110', 12.8, 0.213, 0.0036);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 10 mile/h (6 min/mile)', 'running', '12120', 14.5, 0.242, 0.004);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 11 mile/h (5.5 min/mile)', 'running', '12130', 16.0, 0.267, 0.0044);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 12 mile/h (5 min/mile)', 'running', '12132', 19.0, 0.316, 0.0053);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 13 mile/h (4.6 min/mile)', 'running', '12134', 19.8, 0.33, 0.0055);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 14 mile/h (4.3 min/mile)', 'running', '12135', 23.0, 0.383, 0.0064);


INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 6.4 km/h (9.5 min/km)', 'running', '12029', 6.0, 0.1, 0.0017);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 8.0 km/h (7.5 min/km)', 'running', '12030', 8.3, 0.138, 0.0023);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 9.6 km/h (6.25 min/km)', 'running', '12050', 9.8, 0.163, 0.0027);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 11.2 km/h (5.35 min/km)', 'running', '12070', 11.0, 0.183, 0.003);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 12.8 km/h (4.7 min/km)', 'running', '12090', 11.8, 0.196, 0.0033);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 14.5 km/h (4.1 min/km)', 'running', '12110', 12.8, 0.213, 0.0036);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 16 km/h (3.75 min/km)', 'running', '12120', 14.5, 0.242, 0.004);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 17.7 km/h (3.4 min/km)', 'running', '12130', 16.0, 0.267, 0.0044);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 19.3 km/h (3.0 min/km)', 'running', '12132', 19.0, 0.316, 0.0053);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 20.9 km/h (2.8 min/km)', 'running', '12134', 19.8, 0.33, 0.0055);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('running, 22.5 km/h (2.6 min/km)', 'running', '12135', 23.0, 0.383, 0.0064);


INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('sleeping', 'inactivity', '07030', 0.95, 0.016, 0.0003);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('meditating', 'inactivity', '07075', 1.0, 0.017, 0.0003);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('watching a movie', 'inactivity', '07020', 1.3, 0.022, 0.0004);

INSERT INTO activity (name, type, compendium_code, kcal_per_kg_hour, kcal_per_kg_minute, kcal_per_kg_second)
VALUES ('standing', 'inactivity', '07040', 1.3, 0.022, 0.0004);


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