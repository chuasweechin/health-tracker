CREATE TABLE IF NOT EXISTS user_account (
    username TEXT PRIMARY KEY,
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    gender TEXT,
    birthday TIMESTAMP,
    weight_in_kg DECIMAL,
    height_in_cm DECIMAL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    compendium_code TEXT,
    kcal_per_kg_hour DECIMAL,
    kcal_per_kg_minute DECIMAL,
    kcal_per_kg_second DECIMAL
);

CREATE TABLE IF NOT EXISTS user_weight_log (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
		weight_in_kg DECIMAL,
		created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_activity_log (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
    fk_activity_id INTEGER,
    activity_distance DECIMAL,
    activity_count INTEGER,
    duration_in_second INTEGER,
    current_weight_in_kg DECIMAL,
    current_height_in_cm DECIMAL,
    kcal_burnt DECIMAL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);