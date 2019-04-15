CREATE TABLE IF NOT EXISTS user (
    username TEXT PRIMARY KEY,
    password TEXT,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS stat (
    id SERIAL PRIMARY KEY,
    username TEXT,
    bmi INTEGER,
    bmi_category TEXT,
    weight_in_kg INTEGER,
    weight_in_pound INTEGER,
    height_in_cm INTEGER,
    weight_in_m INTEGER,
    created_at TEXT
);

CREATE TABLE IF NOT EXISTS activity (
    id SERIAL PRIMARY KEY,
    name TEXT,
    type TEXT,
    metabolic_equivalent INTEGER,
    compendium_code TEXT
);

CREATE TABLE IF NOT EXISTS activity_log (
    id SERIAL PRIMARY KEY,
    username TEXT,
    activity_name TEXT,
    count INTEGER,
    duration INTEGER,
    kilocalories_burned INTEGER,
    created_at TEXT
);