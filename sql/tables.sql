CREATE TABLE IF NOT EXISTS user_account (
    username TEXT PRIMARY KEY,
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    gender TEXT,
    birthday TIMESTAMP,
    weight_in_kg DECIMAL,
    height_in_cm DECIMAL,
    target_weight DECIMAL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_weight_log (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
		weight_in_kg DECIMAL,
		created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_calorie_intake (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
		calorie DECIMAL,
		description TEXT,
		created_at TIMESTAMP
);