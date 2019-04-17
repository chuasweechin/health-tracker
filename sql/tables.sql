CREATE TABLE IF NOT EXISTS user_account (
    username TEXT PRIMARY KEY,
    password TEXT,
    first_name TEXT,
    last_name TEXT,
    gender TEXT,
    birthday TIMESTAMP,
    weight_in_kg decimal,
    height_in_cm decimal,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    compendium_code TEXT,
    kcal_per_kg_hour decimal,
    kcal_per_kg_minute decimal,
    kcal_per_kg_second decimal
);

CREATE TABLE IF NOT EXISTS user_activity_log (
    id SERIAL PRIMARY KEY,
    fk_user_account_username TEXT,
    fk_activity_id INTEGER,
    activity_count INTEGER,
    duration_in_second INTEGER,
    current_weight_in_kg decimal,
    current_height_in_cm decimal,
    kcal_burnt decimal,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);