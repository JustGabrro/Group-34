strings = [
    "GOA Make Virgin a Chad",
    "GOA Is Skillful",
    "GOA Help You To Improve Your Social Skills",
    "GOA Help You To Build Best Case's In Programming",
    "GOA Make People Happy",
    "GOA Offers Great Learning Resources",
    "GOA Encourages Personal Growth",
    "GOA Provides Expert Advice",
    "GOA Fosters Community Engagement",
    "GOA Inspires  Innovation"
]

for string in strings:
    x = string.split(" ")
    print(f"String: \"{string}\"")
    print(f"Split x: {x}")
    print()

print("Now We're Splitting By *")
print()

strings = [
    "GOA* Make Virgin a Chad",
    "GOA Is* Skillful",
    "GOA Help You* To Improve Your Social Skills",
    "GOA Help* You To Build Best Case's In Programming",
    "GOA Make People Happy",
    "GOA Offers Great* Learning Resources",
    "GOA Encourages* Personal Growth",
    "GOA Provides Expert Advice",
    "GOA Fosters* Community Engagement",
    "GOA Inspires* Innovation"
]

for string in strings:
    y = string.split("* ")
    print(f"String: \"{string}\"")
    print(f"Split y: {y}")
    print()

print("In The End We're Splitting By #")
print()

strings = [
    "GOA Make# Virgin a Chad",
    "GOA Is Skillful",
    "GOA Help You# To Improve# Your Social Skills",
    "GOA Help You To Build Best Case's In Programming",
    "GOA Make People Happy",
    "GOA# Offers Great# Learning Resources",
    "GOA Encourages# Personal# Growth",
    "GOA Provides# Expert Advice",
    "GOA Fosters Community# Engagement",
    "GOA Inspires#  Innovation"
]

for string in strings:
    z = string.split("# ")
    print(f"String: \"{string}\"")
    print(f"Split z: {z}")
    print()

print("Setting The Maxsplit Parameter To 2")
print()

strings = [
    "GOA Make Virgin a Chad",
    "GOA Is Skillful",
    "GOA Help You To Improve Your Social Skills",
    "GOA Help You To Build Best Case's In Programming",
    "GOA Make People Happy",
    "GOA Offers Great Learning Resources",
    "GOA Encourages Personal Growth",
    "GOA Provides Expert Advice",
    "GOA Fosters Community Engagement",
    "GOA Inspires  Innovation"
]

for string in strings:
    a = string.split(" ", 2)
    print(f"String: \"{string}\"")
    print(f"Split a: {a}")
    print()