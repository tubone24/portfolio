---
title: "marriage-registration"
date: "2021-05-01"
tags: ["PDF", "marriage", "reportlab"]
image: './images/marriage-registration.png'
---

[![](https://i.imgur.com/PXDvU3s.png)](https://marriage-registration-landing-page.vercel.app/)

> I want continuous integration and delivery of my marriage certificate! I want to write my happiness in YAML! I want to marry a software engineer! I can solve those problems!

## How to use

### Write down the information of the person who will be your husband.

Write the information of the person who will be your husband in `config.yaml`.

```yaml
husband:
  last_name: 山田
  last_name_pos: [220,590]
  last_name_kana: やまだ
  last_name_kana_pos: [221,623]
  first_name: 太郎
  first_name_pos: [300,590]
  first_name_kana: たろう
  first_name_kana_pos: [305,623]
  birth_year: 平成５
  birth_month: ５
  birth_day: ２１
  address_first: 東京都千代田区神田
  address_first_pos: [221, 545]
  address_second: ３丁目　４
  is_banchi_address: false
  address_go: １０
  address_apartment: | # 3行までであれば崩れず表現できます
    インチキタワー
    マンション
    ３６１０号室
  household_person: 山田　太郎
  legally_domiciled_first: 東京都千代田区飯田橋
  legally_domiciled_first_pos: [221, 480]
  legally_domiciled_second: ３丁目　４
  is_banchi_legally_domiciled: true
  head_of_person_of_legally_domiciled: 山田　太郎兵衛
  father_name: 山田　権左衛門
  father_name_pos: [221, 410]
  mother_name: 山田　としこ
  mother_name_pos: [221, 380]
  relationship: 長
  marital_history:
    marriage_cat: 2 # 0: 初婚 1:死別 2:離別
    year: 令和3
    month: 6
    day: 1
  job_type: 6
```

### Write down information about the person who will be your wife.

Write the information of the person who will be your wife in `config.yaml`.

```yaml
wife:
  last_name: 貫井
  last_name_pos: [420,590]
  last_name_kana: ぬくい
  last_name_kana_pos: [421,623]
  first_name: はゆ
  first_name_pos: [502,590]
  first_name_kana: はゆ
  first_name_kana_pos: [502,623]
  birth_year: 平成7
  birth_month: 6
  birth_day: 6
  address_first: 東京都小金井市貫井北町
  address_first_pos: [422, 545]
  address_second: ３丁目　４
  is_banchi_address: false
  address_go: １０
  address_apartment: |
    ""
  household_person: 貫井　パッパ
  legally_domiciled_first: 神奈川県横浜市
  legally_domiciled_first_pos: [421, 480]
  legally_domiciled_second: ３丁目　４
  is_banchi_legally_domiciled: true
  head_of_person_of_legally_domiciled: 貫井　パッパ
  father_name: 貫井　パッパ
  father_name_pos: [421, 410]
  mother_name: 貫井　はよ
  mother_name_pos: [421, 380]
  relationship: 長
  marital_history:
    marriage_cat: 0 # 0: 初婚 1:死別 2:離別
    year: 令和３
    month: ６
    day: １
  job_type: 4
```

### Commit and Push.

CI (GitHub Actions will be started.)

If all goes well, a PDF will be created in [Release](https://github.com/tubone24/marriage_registration/releases).
