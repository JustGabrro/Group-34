def find_short(s):
    # ყოფს შემავალ სტრიქონს სიტყვებად და ქმნის სიას
    list1 = s.split(" ")
    
    # იღებს პირველი სიტყვის სიგრძეს საწყის მნიშვნელობად
    word_len = len(list1[0])
    
    # გადის სიის ყველა სიტყვაზე
    for i in list1:
        # თუ მიმდინარე სიტყვის სიგრძე ნაკლებია დამახსოვრებულ მინიმალურ სიგრძეზე
        if len(i) < word_len:
            # ანახლებს მინიმალურ სიგრძეს
            word_len = len(i)
    
    # აბრუნებს ყველაზე მოკლე სიტყვის სიგრძეს
    return word_len

# იძახებს ფუნქციას მოცემული წინადადებით და ბეჭდავს შედეგს
print(find_short("bitcoin take over the world maybe who knows perhaps"))