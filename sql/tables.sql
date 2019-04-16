CREATE TABLE IF NOT EXISTS user (
    username TEXT PRIMARY KEY,
    password TEXT,
    created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS stat (
    id SERIAL PRIMARY KEY,
    username TEXT,
    birth_date TIMESTAMP,
    bmi INTEGER,
    bmi_category TEXT,
    weight_in_kg INTEGER,
    weight_in_pound INTEGER,
    height_in_cm INTEGER,
    weight_in_m INTEGER,
    created_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    compendium_code TEXT,
    kcal_per_kg_hour INTEGER,
    kcal_per_kg_minute INTEGER,
    kcal_per_kg_second INTEGER
);

CREATE TABLE IF NOT EXISTS activity_log (
    id SERIAL PRIMARY KEY,
    username TEXT,
    activity_id TEXT,
    count INTEGER,
    duration INTEGER,
    kilocalories_burned INTEGER,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);