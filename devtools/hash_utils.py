import hashlib

def generate_hash(data, algorithm='sha256'):
    hash_func = getattr(hashlib, algorithm, None)
    if hash_func:
        hashed_data = hash_func(data.encode()).hexdigest()
        return hashed_data
    else:
        raise ValueError(f"Invalid hash algorithm: {algorithm}")
    