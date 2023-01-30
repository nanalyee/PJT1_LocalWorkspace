import React, { Component } from "react";

export default class ResultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 불러와야 하는 값들
      localUser: {
        pk: 2,
        nickname: "user",
        level: 1,
        experience: 4,
        score: 2,
      },

      // videoComponent에서 받을 값들
      member: [
        {
          nickname: "test1",
          score: 4,
        },
        {
          nickname: "user",
          score: 2,
        },
        {
          nickname: "test2",
          score: 3,
        },
        {
          nickname: "test3",
          score: 1,
        },
      ],
    };
  }

  render() {
    const memberList = this.state.member;
    memberList.sort((a, b) => b.score - a.score);
    console.log(memberList);

    return (
      <div id="ResultBox">
        결과화면 테스트
        <div>Result</div>
        <div>
          참가자 결과 리스트 박스
          <div>
            효과도 들어가야 합니다
            {memberList[0].nickname}, {memberList[0].score}
          </div>
          <div>
            {memberList[1].nickname}, {memberList[1].score}
          </div>
          <div>
            {memberList[2].nickname}, {memberList[2].score}
          </div>
          <div>
            {memberList[3].nickname}, {memberList[3].score}
          </div>
        </div>
        <div>
          경험치 박스
          <div>경험치 바</div>
          <div>얻은 점수</div>
        </div>
        <button>나가기버튼</button>
      </div>
    );
  }
}
