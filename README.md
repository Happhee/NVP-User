# NVP-User

# 🖥  프로젝트명 
Nfc + Vaccine Pass

# 🖥 프로젝트 개요
> 안심콜로 인증을 하는 가게에서는 백신패스를 확인하기 위해서 직원이 **직접**확인을 해야한다.
이는 상당한 불편을 초래하고 있다.  이 때문에, 정부는 현재 선 통화 이후 별도로 문자 메시지 등으로 백신정보를 확인해주는 시스템을 구축하려고 있다. 하지만 시스템 구축 비용 등의 문제로 인해 협상이 이루어지지 않고 있다. 
  따라서 우리는 **간편백신패스 인증 시스템 ** 인
  ### NVP
  을 구현하고자 한다.
  
  # 🖥 일반 사용자 주요기능
 > - 휴대폰 문자 메세지 인증을 통한 1차 본인 인증
 > - 정해진 규격에 맞는 카메라 문서 인식 
 > - coov 인증 화면 & 신분증 데이터 비교 분석 (ocr)
 > - Nfc 태그에 회원가입시 필수로 등록했던 백신패스 정보 넣기
 
 
  # 🖥 예상 UI 
  
   ## 개인
![](https://images.velog.io/images/seohee0112/post/4984800a-9356-42f4-8ee5-6fad1c6ba077/image.png)


# 🖥 회원가입시, OCR 기술
1. 휴대폰 문자 인증을 통해 1차적인 본인 인증을 진행
2. 간편 비밀번호 6자리 생성 후, 확인 절차를 거쳐 다음 단계로
3. 신분증 등록 버튼을 누르면, 카메라 화면이 뜨면서 내부적으로 마련한 사각형의 규격이 생성
4. 이에 맞춰 신분증 촬영 진행 (사진 업로드는 불가)
![image](https://user-images.githubusercontent.com/79238676/149599217-c9c413e5-a042-455c-bff4-0e70f7b68ae3.png)

5. 신분증 분석 결과를 사용자에게 확인시켜주면서, 다시찍거나 사용하기 버튼으로 다음 단계 진행
6. 신분증 사용하기를 누르고, 백신 증명서 등록 진행
7. 쿠브 인증서를 가져와, 내부적으로 마련한 데이터 셋을 거쳐 진위여부판단후, 이에대한 결과 제시
8. 저장 버튼을 누르면, 이전에 등록했던 신분증 데이터와 초기 사용자의 정보를 모두 종합하여 사용자의 정보가 일치하면 회원가입에 성공
![image](https://user-images.githubusercontent.com/79238676/149599232-9da4996b-2463-4d07-b13c-651cd8cda5f5.png)
