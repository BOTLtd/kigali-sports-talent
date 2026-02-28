def calculate_score(goals, assists, matches, likes):
    if matches == 0:
        return 0

    performance = (goals * 0.6 + assists * 0.4) / matches
    popularity = likes * 0.2

    return round((performance * 80 + popularity), 2)
