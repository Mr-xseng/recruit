<template>
  <div class="page-search">
    <div class="page-search-title">
      <span>共找到<em>{{allJobNumber}}</em>个符合条件的职位</span>
    </div>
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
    <ul>
      <li
        class="search-item"
        v-for="(item, index) in jobData"
        :key="item.id"
      >
        <div class="detailIcon" @click.stop="openIcon(index)">
          <span class="detailTitle">{{item.openName}}</span>
          <i :class="item.openClass" class="iconBottom"></i>
        </div>
        <template v-if="!item.openFlag">
          <div class="item-left">
            <div class="item-title">
              <div class="item-content">
                <div class="item-name">{{item.jobName}}</div>
              </div>
              <span class="item-icon">校园招聘</span>
            </div>
            <p class="item-info">
            <span>
              <i class="iconfont ">&#xe609;</i>
              <span class="iconName">城市:<em>{{item.jobCity}}</em></span>
            </span>
              <span class="iconPer">
              <i class="iconfont">&#xe623;</i>
              <span class="iconName" style="margin-left: 2px;">人数:<em>{{item.jobNumber}}</em></span>
            </span>
              <span class="iconTime">
              <i class="iconfont">&#xe61c;</i>
              <span class="iconName" style="margin-left: 2px;">发布时间:<em>{{item.jobTime}}</em></span>
            </span>
            </p>
          </div>
          <div class="item-right">
            <p class="conpanyName"><span>{{item.companyName}}</span></p>
            <p class="conpanyJayor">{{item.professionName}}</p>
          </div>
        </template>
        <template v-else>
          <div class="item-title">
            <div class="item-content">
              <div class="item-name">{{item.jobName}}</div>
            </div>
            <span class="item-icon">校园招聘</span>
          </div>
          <p class="detailName"><span>{{item.companyName}}</span></p>
          <p class="item-info">
            <span>
              <i class="iconfont ">&#xe609;</i>
              <span class="iconName">城市:<em>{{item.jobCity}}</em></span>
            </span>
            <span class="iconTime" style="display: inline;margin-left: 25px;">
              <i class="iconfont">&#xe61c;</i>
              <span class="iconName" style="margin-left:2px;">发布时间:<em>{{item.jobTime}}</em></span>
            </span>
          </p>
          <p class="CompanyInfodetailed">
            <span>公司类型:<em>{{item.companyType}}</em></span>
            <span>公司规模:<em>{{item.companySize}}</em></span>
            <span>所属行业:<em>{{item.professionName}}</em></span>
            <span>职位类别:<em>{{item.jobCategory}}</em></span>
            <span>招聘人数:<em>{{item.jobNumber}}</em></span>
          </p>
          <p class="jobDecrile">{{item.jobDescription}}</p>
          <p class="detailMore">查看更多<i class="el-icon-d-arrow-right"></i></p>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      allJobNumber: 1860,
      jobData: [{
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        companySize: '10000人以上',
        jobCategory: '其他',
        id: '8932',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        id: '658',
        jobTime: '昨天',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        companySize: '10000人以上',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        id: '659596',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        companySize: '10000人以上',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        id: '63221',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        companySize: '10000人以上',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        id: '232163',
        companySize: '10000人以上',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        companySize: '10000人以上',
        id: '32378',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }, {
        openFlag: false,
        openName: '展开',
        openClass: 'el-icon-caret-bottom',
        jobName: '党建研究',
        jobCity: '北京',
        jobNumber: '若干',
        jobTime: '昨天',
        companyName: '中国联合网络通信集团有限公司-中国联通党校（学院）',
        professionName: '通信/电信/网络设备',
        companyType: '国企',
        id: '352656',
        companySize: '10000人以上',
        jobCategory: '其他',
        jobDescription: '职责描述：职位描述:中国联通党校（学院）是中国联通集团直属单位，主要承担联通集团干部培训与党建研究等工作。 党建研究岗位的主要职责是：开展党建研究、理论跟踪和资源建设，为干部培训提供正确引领和学理支撑；研讨新形势下国企党建面临的理论和实践问题，撰写研究报告和论文；挖掘企业党建新经验，探索企业党建新思路，提升...'
      }]
    }
  },
  methods: {
    openIcon (index) {
      this.jobData[index].openFlag = !this.jobData[index].openFlag
      if (this.jobData[index].openFlag) {
        this.jobData[index].openName = '收起'
        this.jobData[index].openClass = 'el-icon-caret-top'
      } else {
        this.jobData[index].openName = '展开'
        this.jobData[index].openClass = 'el-icon-caret-bottom'
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  ul:last-child
    border: 1px solid #e6e6e6;
    border-bottom none;
  .item-info
    height: 16px;
    padding-top: 16px;
    margin-left -3px;
    .iconfont
      font-size 18px;
    span
      display: inline-block;
      font: 12px/16px "宋体";
      color: #888888;
      em
        color:black;
      .iconName
        vertical-align 1.5px;
    .iconPer
      margin-left 30px;
    .iconTime
      display block;
      margin-top 15px;
  .detailName
    font-size: 14px;
    font-family: "simsun";
    color: #333333;
    padding-top: 10px;
  .CompanyInfodetailed
    padding-top:16px;
    span
      display: inline-block;
      font: 12px/16px "宋体";
      color: #888888;
      margin-right:20px;
      em
        color:black;
  .jobDecrile
    padding-top: 16px;
    font: 12px/16px "宋体";
    color: #888888;
    isplay: -webkit-box;
    -webkit-box-orient;
    text-overflow: ellipsis;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  .detailMore
    display: inline-block;
    font-size: 12px;
    font-family: "宋体";
    color: #8cc657;
    cursor pointer;
    margin-top 5px;
  .item-title
    line-height 18px;
    .item-content
      font: 14px/18px "simsun";
      color: #315abd;
      font-weight: bold;
      display: inline-block;
      .item-name
        display: inline-block;
        max-width: 15em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    .item-icon
      font: 12px "宋体";
      color: #ff9600;
      padding: 1px;
      box-sizing border-box;
      border: 1px solid #ff9600;
      margin-left: 10px;
      border-radius 3px;
      vertical-align 5px;
      display inline-block;
  .page-search
    width:788px;
    margin 30px auto;
    position relative;
    margin-bottom 200px;
    .page-search-title
      padding-left:10px;
      line-height: 38px;
      background: #f5f5f5;
      border 1px solid #e6e6e6;
      border-bottom:none;
      em
        font-weight: bold;
        color: #ff8416;
      span
        font: 13px/24px "宋体";
        color: #888888;
    .pagination
      position absolute;
      right: -10px;
      bottom: -52px;
    .search-item
      border: 1px solid #e6e6e6
      overflow hidden;
      padding:10px;
      box-sizing border-box;
      position:relative;
      border-top none;
      border-left:none;
      border-right:none;
      .detailIcon
        position:absolute;
        top: 21px;
        right: 15px;
        color: #8cc657;
        cursor pointer;
        .detailTitle
          display: inline-block;
          font-size: 12px;
          font-family: "宋体";
          padding-right: 5px;
        .iconBottom
          font-size 16px;
          vertical-align -2px;
      .item-left
        float: left;
        width: 376px;
        height:100px;
        border-right: 1px dashed #eaeaea;
      .item-right
        display: inline-block;
        width: 300px;
        padding-left: 30px;
        margin: 10px 45px 10px 0;
        .conpanyName
          font-size: 14px;
          font-family: "simsun";
          color: #333333;
          padding-top: 10px;
        .conpanyJayor
          padding-top: 16px;
          font: 12px "宋体";
          color: #888888;
</style>
