from faker import Faker

fake = Faker()

data = [fake.simple_profile() for i in range(1000)]
print(data)
