import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function AppWizard(props) {
  return (
    <div {...props} className={clsx(props.className, 'app-wizard', styles.appWizard)}>
      <div className="heading-group">
        <header>Try our App Wizard</header>
        <p>
        使用我们的应用程序向导直观地生成 Ionic 项目。选择模板、自定义颜色、应用程序图标和 JavaScript 框架，以便更快地构建应用程序。.
        </p>
      </div>
      <div>
        <a href="https://ionicframework.com/start" className="wizard-button">
          Open Wizard <ion-icon name="arrow-forward-outline" />
        </a>
      </div>
    </div>
  );
}
