import React from "react";

const TestimonialCard = () => {
  return (
    <>
      <div className="col-span-1">
        <div className="bg-[var(--sidebar-color)] py-10 px-6 border-l-[2px] border-[var(--primary-color)]">
          <p className="text-[19px]">
            Portfolify is the perfect theme for businesses that want to create a
            stylish and functional website.
          </p>

          <div className="flex items-center gap-2 mt-5">
            <img
              className="rounded-full w-[52px] h-[52px] "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA3sSURBVHgBbVlbbFzXdV33Ne8ZPkWJJmXSj1rvWLJiu4FTJIqRwK7bBrBToGjyUaRAUeQzLdCiaIt8tflsgwb5KtoCRT8cA3Gqpq2jPOAkViLLkWw9HMmySMkkRYpvznvunXtP1j7n3DsjIKSGHM4595x99l577bWPnCe+21RKAUo5gPmnvxwo/S1fyn7q2Jf5IWMu5Fk45j2yZwdP6WU5nMh7ZZ4a+qE/l0nKMRMS8zF/J/p5Pxu0Cw4bIUarbEMHjpOtm810XWUOB2OJPOHIxPTA3FTxbzc7rgwZQ+Q5PS7P6L1kDzPLtS5yzaDS53ddRy/uwGwg325misrs0iMyj4NJt8vfXC7pQ3XbiOu7ekwfrh8CcawP5qQHhH2f/q0H0/f2AGowy898IZNsCJSTWK8Mh8qE0JWVEgbG8RC39tC5dgFurgB/4ZfocyyanIO/t4nStf9HNDaL3pFPoXjqDPzqWGagsmd1GeDEfqidxD0Ta7j2tzjpiddbynHUELZ0bI27kU7UlplP4j6weQ+dV/8B/ZhDrW2M7dxCo9OC73podULkAg+B72vvt5WP/IFHoZ59Gf4nX4FbKFrsKr1VYkAMlagM6xmKBIMD+JufyQPGOXohCb31Ojo7W6h871tQN99CAV0U8yX0ww5qOR/NVhOdXoJ+EsDvJygX8ygmHYSrtxC88U201z6COvNF1A4+QoMMylyL69j+TpMqDaDM0pOc35QoYpzj6ExLcVP5339C4/L/IAp78Bwfe40GYRaj3eki9ErI52mc52C8nEeg+mj1IoS9DtDdRem91xF9++sWPskgaYABPtP4K/NyXWfgTqXtdQZUM3QKjeXt+0jWF7lxiMBNUO+G6NFTLimhEARQNLSczwP9iMYr5D1XGy+U0en20O/sIb98Ba03X0O0sZbuMgRMpTdNo6U9rCwnWSQgY4zUq0NZ26HXCnurmB0pokiAiTEzY2WMlovoMLyq38N4LsH0aAmtVgvbDWY1PEES2j16sxuhvbWKxne/gfitbyNOhtFm+ULZCCql93fNAdwMoJl3TTqnfke/24F37t9R9BV6vRC1wEXFjeiVNkYZ1rFKAZN5DxV6raBiPFQtYG68iGohR+86TJwAxWKRlETq2l1B972fMNmWsh21iyRZHeskjX8YmlHpFAVLssbVkjCOnRg2G+iWJ+G0Gb7QwSg3ypPnKkyE2VoJit6l9ajTeFOZEnrZx1igUA/pPXqX/zRFKS9ATDpKciXrNyfDvMogZmJqKgkGNKOy2mEyTClzosLEPnSSGPUmPRl24dGwybFxHJqbweeefgpNEvS1Gzfwzu0VkGP0KpI41TzDS6P6sWKGh2Y9l3g9/AlExGWQGWMMSP2TfmkPus6QkTa/5BNdjmw1kYf6Xh4eF9/txDgydwCfOfYw2q02dtZX8NjBGeRBvmOIV3bbqJbyuLW8gY2dXXiez8x2mTTCCC5aUQR/ewVBtWb3G/KZ5UWT5xqZypzqgXOkPrQG2ze1515CeOJz8IICjj88xUSgR6r7WQ1KKNJr61t72Kr3sY0Rzinh9CMHMD81qsPaYYL048QYw9IYk9SDcu2BPZwsi5WZRzz6qSWOTQhZQnOfcjL14drUz+17CNU//hv0bp3H0Udn8SSNTMiwUjUiZvFErYrPfnwKjXYXu/UdZq7C8fmHsNHswc/1oII8ST3SJa5YHbGkrAbVxBYG7SSrbnwMYcAZyp6UfrRgcFRWI0uVMjrTh/DwgWnsm5hk9eihXCphqV5nNfDx6Mwsxmoj2Nq6jw/uLuLO5jYKhRJybhPjDPsOE6s3/gjifXOa45IB5Afot9jXckspZJmTiQU1EFnuAwxvgl967Di5uE0jtlCvt/BBvYm9+p5e5caHt3HqyRPIFcvwcjn0FDFHMj+8fwylvIP18jEkJz6L2onfNhpRvpO0sKZ7mc+TlGZgNVts6cV4Uw3SaagWaYSMTmN1/TxuknreWViGR9FQIJrfX13DM781j12qCCHw7UYLy1sNRFEfz86P485eD8mxlzH+6Vfg+DmDfas5DZZsEc5KCUOsbGyVrbsDFZ2KBUeXrWwNzgmOfgKXvvcq5kYCTOUL+KMvf5kJEOHKhZ/j3FsXsHB/Ey88dRgfrG1hYWMXzU4Htzf2cH6pjvKf/i5yoxPWuAGUlA2fymS3iZrUdTMxNU4NPGVIG5oaMIAKvMooljcbeOFjJ3H0ILB2/gK6vR5JfAsvffwQSsTkz67fwoc0sNWJcG+HntxuAkc/g5HaKKz6sAbaCgLHJks6ZojP76s0f0zdS5w07YcFq5Mh5PG3zyL5r69j3e8yfDs4Mn8Q764tYaJC4t5Xo3gIcflDJsfaNmt3Hx2GO6pMofKFv0Ttd16Gx4TRFSrLVtv9KJVhP1PayupBN9N/g0Rx0nRyB1pxur6Gl/77H/Efi1eRTE7hjSsLCHmi++0OijmHydDH1YUVfHBvA7vNtl557KWvoHX6D1EYGeNS7gMFwcLfxiux7lCZYJBPfOghd4gkMQhn1qg5KMchvvqdv0eJOm+T5eu5x6exG/XwrbM/Qp/jNZa+BvsTl+XQpyEVCoiTc/tw6fTvoTQ+qS1x0o4N5vBpewE13IcMuj1NM54WpENk5JhwahFrk2Lu/m2cuf4GZuor6OXyeGZmCnMHp/D8QwdwebyKi7c/QpsEXOZDAVXLzFgVx6ZHQblIgTEBq+71LskDHJvp0kzuAQM+lC9fYYiDrAAUfxbjHp5auICPXXwd41d+iokSpVKtghK57cjEAXpNUbx4+OSROcxNVKicu6wcIUIaWqKHPd/F4uIKnjj7z7jxB3+BKMhl0VFW00vsVGKcYnw3CH9Ku34mSGmWeO3x1V/hmSvfx6mbP4Hf3MGH99fRp0Dwyw5C8hn1Mo6Rw64S+PVmE5PVIqbHKmi0POxREETUiTm+tvbabAc6OPXmf2L+/R/hxu9/FbdOvmhqrE0QZcGeUk76mUori8Di8Nm2kr721J1LeP7Nf8PBpauULX12aC4TQOFX65s4WKuhRtVcYvjynocupdPN409iO9nFSFJHQMMUhUBIlVJnwnTpyRWS8oHZ45i4eB51jrvtFtqPnMR7n/4TXH/yBeoHpTVjKhISNYDZMCRc6b5f/uVr+PNX/xqzC5eRhH3dm0jG0Q4tBHJ8bVLbRbF0bImWTfuvv4cnjj2HRi9GLwy5jNLtpscwbNNzs0dPY356BlUeapS86DHE+dvv4sxrf4cvfvNLGGHrkFanJE1L68nE5rSE3Puzw4e/9vk3/xU9KpBY2ksaJp2UaLiIxjQoKqvsPXrks1o+Z28NoIm5vriIiWeeRb++ijzlVrEQaG+03TyePvN5OOv3kbu3hCVqxhpFRsy1CjzcaGcHJy+fRT6JsDx3itzrZp5LsyQVrt43Cs2vJWwNt9o9fYUhzbdstscUzNNzDRqSo3TPcWyUSbJcb+DnK6s4f3cZAcvbCBV29dQpdLbvaQxL3T1E3VgojSD58Tlm+CIu3F3BPLO9IP0IebOaC1DgVcnM0mXML17G+8eeJ859GMpTac+rneFGNIBxwR7DFOlOyqX3PK16CzRwpFDQ+BDsLVM63aEoFRJ+evoAivRq49ZtFLYSHHvlKyjNHMKRF7+E6cdPwF1bw7lfvI09JtKh0Qqbrq6uqzmuE7iuhkONez229C5ePPcvGd8OOhJDOrp5iCiHOsRXVUoLT9kn2cpZRKbXigXsMkQBvTpGg/fP1fD2XYXpKuUUNxC95r19HrN/9beYPf0pNkZd3H3nIsLljyhm2YKOCDWx6yvx/kbiFosdfE7qO3Fb4eupS9/B+ae/gNXJh63znEz+6yQR4BdzgTZI2sIuszjvB3pymcQs1ODx1K60lPRAMRAYBPqcBV55KPbALV6J9NjZRfR8zA3WLl1EreBjtJBnZ5dneHlH4xvPycH01ZvciknEmM1H3v/hgHpsuTNZLP0BDdxfoeplYsgh22GsKUUyKUeDyyxbfS4i+JTKIkYZtcMFeJBuqYJwY5NLeWhSxLavvouPFhYwXamiRDIv0SghdZc3YuKEwDWCwNP9uAnto3fesRnsGCfb3HZbnZ72TJUhlKsKaWyEn6SWptw0Qi8IxUQEdqzrIwmZMJBqESu5+uD1Bht4j8Y2KP2Xf/B/bObzPHRZU1SZ2S9cKRj0dCK6+sD6Jk88SS9Ord5Eju2ssm6MLVG7Qi1SR4VGJNkj3qUIDmVhrkmDEu2ZgB6INbnGDDG9xmyVhSNmssNbh4DCNWq3oZgczvqaTi5dHh3DpZ6wg+sb5UQDzRWv6b3lkH7Uwuy9G1kpUZYHXbk5aTCD6+QorQdhlHVMHPI5Mn6iwSrZJ7tFieAuR53X1y1C2pI6xGqXt1huo65xW+McaUUlUp7VfBJiwXXf3j/rC0pZU8dWYW71enY3ZIUXKxA9IQJgaWdPh1YDGKbtlBBLSRKjPX3l62i8Cp5E+0m29zkuSSY3pVFEADSk9NFbTDotsVxzBx7rloJ/Czy4j0g5cy3kkkHIGozpyWvfN+hL+3R5Rog45AShkUQN1IQYom8TEmNkWrxFfQiOJCyimEMxkvh0qlVNH4o1VyIglCJ4dY2i1/CR9WVuFJsrZo1xWYfXdbLu2MYCqq2drJpo+9s0UIzIMdjmAt38F4DS4RM5FOuH5b2+6HFdHTbBjoiJ2EQKiYCfkUh2d4g1U7rEGI8e69EBgvGQfCvvzc2ZqbchPRfzJa2GyzlzK9eQdnRi5K8BuZBVxfeLrywAAAAASUVORK5CYII="
              alt=""
            />

            <div>
              <span className=" text-[17px]">Robert Fox</span>
              <p className="-mt-1 mb-0 text-[15px] ">Canada</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
